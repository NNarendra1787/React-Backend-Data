const express = require('express');
const catRoute = require('./Routers/catRoute');
const userRoute = require('./Routers/userRoute');
const cors = require('cors');


const dotenv = require('dotenv')
dotenv.config()

const App = express()

App.use(cors({
    // origin: "https://react-backend-data.onrender.com"
    origin: "*"
}))

App.use(express.json())
App.use("/api/category", catRoute)
App.use('/user', userRoute)


App.listen(500, ()=>{
    console.log("Server is running on port 500");
})

// https://react-backend-data.onrender.com/api/category/categries
// with localhost - localhost:500/api/category/categries

/* useEffect(()=>{
    const api="https://backendapi-kh83.onrender.com/api/category"
    axios.get(api)
    .then((res)=>{setData(res.data)})
},[])
*/