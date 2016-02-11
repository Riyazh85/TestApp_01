var State = require('ampersand-state');

// Create a constructor to represent the state we want to store
var Person = State.extend({
    props: {
        name: 'string',
        isDancing: 'boolean'
    }
});

module.exports = Person;
// Create an instance of our object
var person = new Person({name: 'henrik'});

// watch it
person.on('change:isDancing', function () {
    console.log('shake it!');
});

// set the value and the callback will fire
person.isDancing = true;