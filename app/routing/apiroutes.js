//require friends data
var friends = require("../data/friends.js");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function (req, res){
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 40
        };

        console.log(req.body);

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        //loop through all the friends
        for(var i = 0; i < friends.length; i++){
            // console.log(friends[i]);
            var totalDifference = 0;

            //get all the scores of each of the friends
            for(var j = 0; friends[i].scores[j]; j++){
                
                totalDifference = Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // console.log("this is total: " + totalDifference);

                //compare the scores each of the friends against the new friend for best match
                if(totalDifference <= bestMatch.friendDifference){

                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //make sure that the friends in the data is exported otherwise it will say push 
        //function not found
        //adds new friend to friends list
        friends.push(userData);
        console.log("best match: " + bestMatch.name," " + bestMatch.friendDifference);
         
        //sends the response to the survey.html to display to the user
        res.json(bestMatch);
      });
}