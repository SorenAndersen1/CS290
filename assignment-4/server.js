/*
 * Write your server code in this file.
 *
 * name: Soren Andersen
 * email: andesore@oregonstate.edu
 */

var http = require("http");
var fs = require("fs");
var PORT = process.env.PORT || 3000;
var data_constant = 0;
var server = http.createServer(requestHandler);



server.listen(3000, function (err) {
	if(err){
		throw(err);
	}
  console.log (" The server is listening on port 3000");
});

function requestHandler(req, res){
	var array = [];
	var i = 0;
		// console.log("got here");
		if(inputtest(req)){

			if(array.includes(req.url)){
			i = array.includes(req.url)
			data_constant = array[i];
			res.statusCode = 200;

		}
		var string = req.url;
		res.statusCode = 200;
		console.log(req.url);
	}

	if(string === "/index.html"){
		 res.end(fs.readFileSync('public/index.html'));
                console.log(" index.html");
					
	}
	else if(string === '/'){
			 res.end(fs.readFileSync('public/index.html'));
                console.log(" index.html");
				
	}
	else if(string === '/style.css'){
			 res.end(fs.readFileSync('public/style.css'));
                console.log(" style.css");
		
	}
	else if(string === '/index.js'){
		 res.end(fs.readFileSync('public/index.js'));
                console.log(" index.js");
				
}
	else if(string === '/404.html'){
			 res.end(fs.readFileSync('public/404.html'));
                console.log(" 404.html");
			
	}
	else{
		res.end(fs.readFileSync('public/404.html'));
		res.statusCode = 404;
	}
}

function inputtest(input){

	if(input.method === "GET"){
		return true;
	}
	else{
		return false;
	}
}