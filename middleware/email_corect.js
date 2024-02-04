// check emailFunc Correct =============

const verifyEmail = async (req, res, next) => {
  let {email} = req.body
  email = email.trim();

  function isValidEmail(email) {
    return email.includes("@gmail") && email.includes(".com");
  }

  if (isValidEmail(email)) {
    next();
  } else {
    req.flash("error", "Provide Valid Email");
    const messages = req.flash();
    if(req.path === '/login'){
    return res.render("login", { messages });
  }
  return res.render("signup", { messages });
}
  
};

// export Statement ==============
module.exports = { verifyEmail };
