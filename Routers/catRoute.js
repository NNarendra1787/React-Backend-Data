const Category = require('../Controllers/Category');
const {Category2, Bollywood, Top, Hollywood, Technology, Food, Fitness} = require('../Controllers/Category2');
const authoried = require("../midelware")
const catRoute = require("express").Router();

// catRoute.get("/categries", authoried, Category) //specific middleware
// catRoute.get("/categries", Category) //specific middleware
catRoute.get("/categries2", Category2) //specific middleware
catRoute.get("/top", Top) //specific middleware
catRoute.get("/bollywood", Bollywood) //specific middleware
catRoute.get("/hollywood", Hollywood) //specific middleware
catRoute.get("/technology", Technology) //specific middleware
catRoute.get("/food", Food) //specific middleware
catRoute.get("/fitness", Fitness) //specific middleware

module.exports = catRoute;

//ther will be a login and signup functiality
//until the use is not ragisterd dont' show the data
// if the use person token is expired then automatically logout