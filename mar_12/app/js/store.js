'use strict';
var Fluxxor = require('fluxxor');
var Contants = require('./constants');
var request = require('superagent');
var baseUrl ='/api/v1/notes';

module.exports = Fluxxor.createStore({
    initialize: function() {
        this.notes = [];

        this.bindActions(
            Contants.ADD_NOTE, this.onNewNote,
            Contants.REMOVE_NOTE, this.onRemoveNote
        );

        request
            .get(baseUrl)
            .end(function(err, res) {
                if (err) return console.log(err);

                this.notes = res.body;
                this.emit('change');
            }.bind(this));
    },

    onNewNote: function(note) {
        request
            .post(baseUrl)
            .send(note)
            .end(function(err, res) {
                if (err) return console.log(err);

                this.notes.push(res.body);
                this.emit('change');
            }.bind(this));
    },

    onRemoveNote: function(note) {
        request
            .del(baseUrl + '/' + note._id)
            .end(function(err, res) {
                if (err) return console.log(err);

                this.notes.splice(this.notes.indexOf(note), 1);
                this.emit('change');
            }.bind(this));
    },

    getState: function() {
        return {notes: this.notes};
    }
});