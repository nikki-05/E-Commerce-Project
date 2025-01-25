/**
 * create a middleware that will check if the request body is proper or not
 */
const user_model= require("../models/user.model")
const verifysignup = async(req, res, next)=>{
    try{
        //check for name, email ,userid....
        //chcekc if user is with the same user id
        if(!req.body.name){
            return res.status(400).send({
                message: "Failed, Name was not provided"
            })
        }
        if(!req.body.email){
            return res.status(400).send({
                message: "Failed, email was not provided"
            })
        }
        if(!req.body.userId){
            return res.status(400).send({
                message: "Failed, userId was not provided"
            })
        }
        const user= await user.model.findOne({userId: req.body.userId})

        if(user){
            return res.status(400).send({
                message: "userid is same"
            })

        }
        next()

    } catch(err){
        console.log("Error while Validating the request object ", err)
        res.status(500).send({
            message: "Error while Validating the request body"
        })
    }
}
module.exports ={
    verifysignupbody : verifysignup
}