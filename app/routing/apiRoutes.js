
var friendData = require("../data/friend.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
	app.get("/api/friends", function(req, res) {
    	res.json(friendData);
    });

// A POST routes /api/friends. This will be used to handle incoming survey results. 
// This route will also be used to handle the compatibility logic.
	app.post('/api/friends', function(req, res){

		var newUserScores 	= req.body.scores;

		//loop through the friends data array of objects to get each friends scores

        for(var i = 0; i < friendData.length; i++){

			var totalDifference = 0;
			for(var j = 0; j < newUserScores.length; j++){
			
			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference 
			//variable set above
			for(var j = 0; j < 10; j++){
				// We calculate the difference between the scores and sum them into 
				//the totalDifference
				totalDifference += Math.abs(parseInt(newUserScores[j]) - parseInt(friendData[i].scores[j]));
				// If the sum of differences is less then the differences of the current 
				//"best match"
				if (totalDifference <= greatMatch.friendDifference){

					// Reset the bestMatch to be the new friend. 
					greatMatch.name = friends[i].name;
					greatMatch.photo = friends[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friends.push(usrData);
 
		res.json(greatMatch);




	};




};