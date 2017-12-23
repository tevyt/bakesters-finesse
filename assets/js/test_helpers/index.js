/*Allows tests to use es2015 and jsx syntax
Presets set in package.json */
require('babel-core/register')({
  ignore: /node_modules/
});

/*Gives tests access to the DOM API*/
require('jsdom-global')();

var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter()});