// import statement ========
const jwt = require('jsonwebtoken');
require("dotenv").config();
const userschema = require('../Models/J_index');



// verify user IS already exist in Data Base or not ========
const userVerify = async (req, res)=>{
    let {email, password} = req.body;
    password = password.trim().toLowerCase();

    try{
        await userschema.userSignup.findOne({
        where: {email : email}
    })
    .then((result)=>{
        if(result.email === email && result.password === password){
         // generate a token ====================
         const token = jwt.sign({email: email}, process.env.TOKEN_SCR, {
            expiresIn: '10m'
         });
         res.cookie('token', token);
         res.redirect('/home');     
    }
    else{
        req.flash("error", "invalid Password");
        const IncorrectPWD = req.flash();
        res.render("login", {IncorrectPWD});
    }
    })
    .catch(()=>{
        req.flash("error", "create signup A/c And then signin");
        const existMessage = req.flash()
        res.render("login", {existMessage});
    })
        
   }
   catch(err){
    res.status(400).json({err: err})
   }

}

// Export =============
module.exports = {userVerify};