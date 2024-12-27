const { request } = require("express")
const bcrypt= require("bcrypt")
const user_model= require("./models/user.model")
//logic to register a user
exports.signup= async (req, res)=>{
/* 1. Read the request body
   2. Insert tthe data in the users collection
   3. Return the response back to the user 
*/
const request_body= req.body

const userObj= {
    name : request_body.name,
    userId: request_body.userId,
    email: request_body.email,
    userType: request_body.userType,
    password: bcrypt.hashSync( request_body.password,8)

}
try{
    const user_created = await user_model.create(userObj);
    res.status(201).send(user_created);

}catch(err){
    console.log("Error while registering the user", err);
    res.status(500).send({ message: "Error while registering the user" });
}

}