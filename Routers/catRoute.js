const Category = require('../Controllers/Category');
const authoried = require("../midelware")
const catRoute = require("express").Router();

catRoute.get("/categries", authoried,Category) //specific middleware

module.exports = catRoute;

//ther will be a login and signup functiality
//until the use is not ragisterd dont' show the data
// if the use person token is expired then automatically logout