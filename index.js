const express = require('express');
const catRoute = require('./Routers/catRoute');
const userRoute = require('./Routers/userRoute');

const dotenv = require('dotenv')
dotenv.config()

const App = express()

App.use(express.json())
App.use("/api/category", catRoute)
App.use('/user', userRoute)


App.listen(500, ()=>{
    console.log("Server is running on port 500");
})