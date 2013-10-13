//---------------------------------------------------//

var http = require('http');
var express = require('express');
var mongojs = require('mongojs');
var jade = require('jade');

// Intialize Express App and Listen on Port 8000
//---------------------------------------------------//

function init_express() {
	
	//Use Express
	var app = express();

	//ROOT page
	app.get('/', function(req, res) {
		res.send('hello world!');
		//todo: render a template
	});

	//NAME page
	app.get('/name', function(req, res) {
		res.send('hello name');
		//todo: render a template
	});

	var options = {
		setting: true,
		setting2: ''				
 	};

	var fn = jade.compile('html(lang="en"\nhead\ntitle=MyApp\n
		body\nh1#title Hi jade', options);
	//fn(locals);

	//start web app
	app.listen(8000);
}


// Main Application
//---------------------------------------------------//

init_express();

console.log('\nWeb App is running...');
console.log('Please visit http://localhost:8000');















// Junk code

function initialize(res) {
	var j = 10;

	console.log('Hello');

	setTimeout(function(res) {
		console.log("Finish!");
		res.end('');
	},10000,res);

	setTimeout(function(res) {
		console.log("World\n");
	}, 2000, res);
}


