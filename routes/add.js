var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here

	var namez = {"name": request.query.name,
			"description": request.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"};
			data.friends.push(namez);
			response.render('index', data);
	
	
 }