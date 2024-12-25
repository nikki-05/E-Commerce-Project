const express= require("express")
const mongoose= require("mongoose")
const app= express()
const server_config= require("./configs/server.configs")
const db_config= require("./configs/db.config")
const user_model= require("./models/user.model")
const bcrypt= require("bcrypt")



/*Create an admin user at the starting of the application
*/
//connection with MongoDb
mongoose.connect(db_config.DB_URL)
const db= mongoose.connection
db.on("error", ()=>{
    console.log("Error while Connecting to database");
})
db.once("open", ()=>{
    console.log("Connection Successful");
})

async function init(){
    try{
        let user= await user_model.findOne({userId: "admin"})
        if(user){
            console.log("Admin is already present");
            return
        }
    }catch(err){
        console.log("Error while reading the data", err);
    }

    try{
        user= await user_model.create({
            name: "Nikita", 
            userId: "admin1234",
            email: "nikitatewari1633@gmail.com",
            userType: "admin",
            password : bcrypt.hashSync("Welcome1", 8) //encrypting the password 8 is salt (more complicated password with random no.)
        })
        console.log("Admin created" , user );
    }catch(err){
        console.log("Error while creating admin" , err);
    }
}

/* start the server
*/
app.listen(server_config.PORT, ()=>{
    console.log("Server starts" ,server_config.PORT );
})