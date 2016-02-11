

var data = require('../modules/data-module');
var squareNumbers = require('../modules/square-numbers');
var personModule = require('../modules/person-module');
 var controller = (function(){

		var person = new personModule({name: 'henrik'});

		// watch it
		person.on('change:isDancing', function () {
		    console.log('shake it!');
		});

		// set the value and the callback will fire
		//person.isDancing = true;




 	var controller_inputData = function(){
  	 	return data.inputData();
  	 }
  	 var square = function(data){
  	 	return squareNumbers.sqNumbers(data)
  	 }
  	 var addition = function(data){
  	 	return squareNumbers.addNumbers(data)
  	 }
  	 return {
  	 controller_inputData:controller_inputData,
  	 square:square,
  	 addition:addition
  }
 })()

 module.exports = controller;