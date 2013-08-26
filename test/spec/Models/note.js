/*global define*/
/*global test*/
/*global equal*/
define(['models/note'], function (Model) {
    'use strict';

    module('Note model');
    test('Can be created with default values', function() {
        var note = new Model();
        equal(note.get('notebookId'), 0, 'Default note id for notes is 0');
        equal(note.get('isFavorite'), 0, 'For default note is not favorite');
    });
});
