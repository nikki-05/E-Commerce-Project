
const authController= require("../controllers/auth.controller")
const authMW= require("../middlewares/auth.mw")

module.exports= (app)=>{
    app.post("/ecomm_db/api/v1/auth/signup", [authMW.verifysignup], authController.signup);
}