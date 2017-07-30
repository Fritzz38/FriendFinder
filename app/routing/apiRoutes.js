
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

		var totalDifference = 0;
		var diffArray = [];
		var userData = req.body.scores;
		console.log("New User Scores: " + userData)
				
		for (var i = 0; i < friendsData.length; i++) {	

            console.log(friendsData[i]);
            var scoresArr = friendsData[i].scores;
            totalDifference = 0;

			for(var j = 0; j < scoresArr.length; j++) {
			
				totalDifference += Math.abs( userData[j] - friendsData[i].scores[j] );
								
			}

			diffArray.push(totalDifference);
			
		}

			console.log("total Difference Array: " + diffArray);
				
			var leastDiff = Math.min.apply(null, diffArray);

			var matchIndex = diffArray.indexOf(leastDiff);
        
            var bestMatch = friendsData[matchIndex];

            console.log("Your Best Match Friend: " + bestMatch.name);
        
            res.send(bestMatch);

			friendsData.push(req.body);	
			
	});

};