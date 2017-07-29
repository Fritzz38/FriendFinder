
var friendsData = require("../data/friend");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {
    	res.json(friendsData);
    });



// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
	app.post("/api/friends", function(req, res){

		//friendsData.push(req.body);
		var totalDifference = 0;
		var diffArray = [];
		var userData = req.body.scores;
		
		for (var i = 0; i < friendsData.length; i++) {			

			for(var j = 0; j < userData.length; j++) {
			
				totalDifference += Math.abs(parseInt(userData[j]) - parseInt(friendsData[i].scores[j]));
								
				diffArray.push(totalDifference);
			}
		}

				console.log("kamuuuu " + diffArray);

				var minimum = Math.min.apply(null, diffArray);

				var matchIndex = diffArray.indexOf(minimum);
        
                var bestMatch = friendsData[matchIndex];
        
                res.send(bestMatch);
				
			
	});




};