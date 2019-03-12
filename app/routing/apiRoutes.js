//LOAD DATA
//Link to my friends.js file (object and key value pairs)

var friends = require("../data/friends");

module.exports = function(app){
    //API GET Requests
    
    app.get("/api/friends", function(req, res){
        res.json(friends);
        console.log(req);
    });

    app.post("api/friends", function (req, res){
        friends.push(req.body);
    })
}