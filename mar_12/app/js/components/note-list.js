'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);

var Note = React.createClass({
    mixins: [FluxMixin],
    handleDelete: function() {
        this.getFlux().actions.deleteNote(this.props.data);
    },
    render: function() {
        return <li><span>{this.props.data.author + ': '}</span>{this.props.data.noteBody}<button onClick={this.handleDelete}>Delete</button></li>
    }
});

module.exports = React.createClass({
    render: function() {
        var notes = this.props.data.map(function(note) {
            return <Note data={note} key={note._id}/>;
        });
        return (
            <section>
                <h1>Notes:</h1>
                <ul>
          {notes}
                </ul>
            </section>
        )
    }
});