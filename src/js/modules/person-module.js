var AmpersandState = require('ampersand-state');

var Person = AmpersandState.extend({
	initialize: function(){
			console.log("initialized");
	},
    props: {
        firstName: 'string',
        lastName: 'string',
        numberOfChildren: {
            type: 'number',
            test: function(value){
                if (value < 0) {
                    return "Must be a positive number";
                }
                return false;
            }
        }
    },
    session: {
        signedIn: ['boolean', true, false],
    },
    derived: {
        fullName: {
            deps: ['firstName', 'lastName'],
            fn: function () {
                return this.firstName + ' ' + this.lastName;
            }
        }
    }
    
});

module.exports = Person;
