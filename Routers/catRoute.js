const Category = require('../Controllers/Category');

const catRoute = require("express").Router();

catRoute.get("/categries", Category)

module.exports = catRoute;