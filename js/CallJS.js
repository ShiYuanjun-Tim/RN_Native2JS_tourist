
var BatchedBridge = require('BatchedBridge');

const infoLog = require('infoLog');

  
var CallJS = {
	callll: function(msg) {
		 alert(msg+" called from native CallJS")
	}
	 
};

BatchedBridge.registerCallableModule(
	'CallJS',
	CallJS
);
 

export default CallJS