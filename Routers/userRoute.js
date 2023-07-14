const { ragister, login } = require("../Controllers/userController");

const userRoute = require("express").Router();

userRoute.post("/ragister", ragister)
userRoute.post("/login", login)

module.exports = userRoute