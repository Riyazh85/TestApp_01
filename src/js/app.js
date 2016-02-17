 console.log('Welcome to my application')

  // require the local module
  var moduleController = require('./controller/controller');

 

  var input = moduleController.controller_inputData();
  console.log('Input is:', input);
  console.log('Squared is:', moduleController.square(input));
  console.log('Addition is:', moduleController.addition(input));
  console.log('Squared:', moduleController.square(input));
