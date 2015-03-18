'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');
var NoteStore = require('./store');
var actions = require('./dispatcher');

var NotesApp = require('./note-app');

var stores = {
  NoteStore: new NoteStore()
};

var flux = new Fluxxor.Flux(stores, actions);

React.render(<NotesApp flux={flux}/>, document.body);
