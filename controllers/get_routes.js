//  get routes && engine Files ================

const indexRoute = (req, res)=>{
    res.render("signup");
};

const loginRoute = (req, res)=>{
    res.render("login")
};

const homeRoute = (req, res)=>{
    res.render("home")
}


//  Exports ===============
module.exports = {indexRoute, loginRoute, homeRoute};