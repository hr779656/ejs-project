//   import Statement ==============
const db = require("../Models/J_index");

// Signup Schema ==========
const signup_schema = db.userSignup;

// SignUp Function ============

const signupFunc = async (req, res) => {
  let { firstname, lastname, email, password, phone } = req.body;

  // Form data Convert into LowerCase && Space removing =========
  firstname = firstname.trim().toLowerCase();
  lastname = lastname.trim().toLowerCase();
  password = password.trim().toLowerCase();

  try {
    await signup_schema
      .create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        phone: phone
      })
      .then((result) => {
        // res.status(200).render("login");
        res.send("Added")
      })
      .catch(() => {
        res.send("user not signed up")
      });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
};

// Export Statement ==========
module.exports = { signupFunc };
