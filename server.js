const express= require("express")
const mongoose= require("mongoose")
const app= express()
const server_config= require("./configs/server.configs")

/* start the server
*/
app.listen(server_config.PORT, ()=>{
    console.log("Server starts" ,server_config.PORT );
})