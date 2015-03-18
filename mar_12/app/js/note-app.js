'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');

var NoteList = require('./components/note-list');
var NoteForm = require('./components/note-form');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;


module.exports = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('NoteStore')],

    getStateFromFlux: function() {
        return this.getFlux().store('NoteStore').getState();
    },
    render: function() {
        return (
            <main>
                <NoteForm />
                <NoteList data={this.state.notes} />
            </main>
        )
    }
});