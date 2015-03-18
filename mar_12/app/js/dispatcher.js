'use strict';

var Contants = require('./constants');


module.exports = {
    addNote: function(note) {
        this.dispatch(Contants.ADD_NOTE, note);
    },

    deleteNote: function(note) {
        this.dispatch(Contants.REMOVE_NOTE, note);
    }
};