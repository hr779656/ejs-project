// import statement ============
const express = require("express");
const router = express.Router();
const {signupFunc} = require("../controllers/signUp_con");
const {verifyEmail} = require("../middleware/email_corect");
const {verifyToken} = require("../middleware/verifyToken");
const {userVerify} = require("../controllers/login_con");
const {indexRoute, loginRoute, homeRoute} = require("../controllers/get_routes");
// const {testReqbody} = require('../test')

// All Routers =============
router.get('/', indexRoute);
router.get('/login', loginRoute);
router.post('/signup', signupFunc);
router.get('/home', [verifyToken], homeRoute);
router.post('/login', [verifyEmail], userVerify);
// router.post('/test', testReqbody);


// Export Routes =============
module.exports = router;

