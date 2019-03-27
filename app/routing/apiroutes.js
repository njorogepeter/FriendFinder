var friends = require("../data/friends");

module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function (req, res){

        //store new friend details
        var newFriend = req.body;
        console.log(newFriend);

        //Determine the user's most compatible friend 
        for(var i = 0; i < friends.length; i++){
            var totalDifference = 0;
            
            for(var j = 0; j < friends[i].scores.length; j++){
                var difference = math.abs(newFriend.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if(totalDifference < minDifference){
                bestMatch = i;
                minDifference = totalDifference;
            }
        }
        friends.push(newFriend);

        res.json(friends[bestMatch]);

        
    });
}