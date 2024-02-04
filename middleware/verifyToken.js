//  import statements ========
const jwt = require('jsonwebtoken');
require("dotenv").config();
const userschema = require('../Models/J_index');
const { render } = require('ejs');


// verify token&email is correct or not =========
const verifyToken = async (req, res, next)=>{
    const token = req.cookies.token
    

// token is not exist move login route ========
    if(!token){
        res.render('denied_err')
    }

    try{
       const checkToken = jwt.verify(token, process.env.TOKEN_SCR);
       const emailToken = checkToken.email;
    //    console.log(checkToken)

    // Go database And Find User this user exist or not ============
     await userschema.userSignup.findOne({
         where: { email: emailToken }
        })
        .then((result)=>{
            if(result.email == emailToken){
               next(); 
            }
        })
        .catch(()=>{
            res.render("denied_err")
        })
    }catch(err){
        res.render("denied_err")
    }
}

// Exports ===============
module.exports = { verifyToken };