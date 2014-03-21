var readAndFilter = require('./learn_node5_module.js')

var fileCharArray = [];
var pathBufferObject = [];


pathBufferObject = process.argv;

readAndFilter(pathBufferObject[2],pathBufferObject[3]);