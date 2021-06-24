/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Soren Andersen
 * Email: andesore@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var expresshandlebars = require('express-handlebars')
var bodyParser = require("body-parser")
var app = express();
var port = process.env.PORT || 3000;
var twitData = require('./twitData');

app.use(bodyParser.json());
app.use(express.static('public'));
app.engine("handlebars", expresshandlebars({defaultLayout: "bodyHeaders"}));
app.set('view engine', "handlebars");


app.get("/", function (req, res) { 
	res.status(200).render('mainBody', {
		
	twit: twitData,
	Text: twitData.text,
	Author: twitData.author	
	});
});

app.get('/twits/:num', function (req, res, next) { 
	var dumNum = req.params.num;
		var reqNum = Number(dumNum);

		if(reqNum >= 0 && reqNum <= 7 ){
			res.status(200).render('template', {
		Text: twitData[reqNum].text,
		Author: twitData[reqNum].author
	
	});
		}
});


app.get('*', function (req, res) {
  res.status(404).render('fourorfour');
});

app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
