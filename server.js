// Require express  
var express = require("express");

//This tell node that we are creating an "express" server
var app = express();

//My port to listen on. Either process.env.PORT or 8080 if default is unavailable
var PORT = process.env.PORT || 8080;

//Express data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//My routes that my server wil reference
require("./app/routing/apiRoutes")(app);
// require("./app/routing/htmlRoutes")(app);

//Start my server
app.listen(PORT, function(){
    console.log("App is listening on PORT:" + PORT);
});