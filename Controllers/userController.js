const arr = [] //Database;
const bcyrpt = require("bcrypt");
const saltround = 10;
const jwt = require ('jsonwebtoken')
const secretKey = process.env.seacreatKey
// const dotenv = require('dotenv')
// dotenv.config()

const ragister = (req, res)=>{
    // res.send({mes: "User is ragister"})
    const RjData = req.body;
    console.log(RjData);

    const user = arr.find((details)=>{
        if(details.email == RjData.email){
            return details;
        }
        
    })
    
    if(user){
        return res.send("User already exist please try to login!!")
    }
    const hashpassword = bcyrpt.hashSync(RjData.password, saltround)
    const tempObj={
        name: RjData.name,
        email: RjData.email,
        password: hashpassword,
        contact: RjData.phone
    }

    const token = jwt.sign({userEmail :RjData.email}, process.env.seacreatKey, {expiresIn : '360m'})
    arr.push(tempObj);
    console.log(arr);
    return res.send({msg : "user ragister", token: token})
}

const login = (req, res)=>{
    // res.send({mes:"Your Login"})
    const LogData = req.body;
    const user = arr.find((details)=>{
        if(details.email == LogData.email){
            return details;
        }
        
    })

    if(!user){
        return res.send("You are not ragister, ragister it")
    }
    const validate = bcyrpt.compareSync(LogData.password, user.password)
    if(validate){
        const token = jwt.sign({userEmail: LogData.email}, process.env.seacreatKey, {expiresIn : '360m'})
        return res.send("user login")
    }
    return res.send({msg : "user ragister", token: token})
}
// console.log(login);

module.exports = {
    ragister,
    login
}