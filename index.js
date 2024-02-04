// import statemen ============
const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./Models/J_index');
const port = process.env.PORT || 5000;
const allRoutes = require("./routes/allroutes");
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require("connect-flash");
const cookieParser = require('cookie-parser');
const cors = require('cors')



// setup view Engine ==========
app.set('view engine', "ejs")
app.use(express.static("public"))

// setUp Body_Parser ======
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser())
app.use(cors())

// Session And Flest Massages setup ============
app.use(session({
  secret: process.env.SECRETKEY,
  resave: false,
  saveUninitialized: false
}));
app.use(flash())

// Routes ==========
app.use(allRoutes);

// dataBase Syncronus && and Server started ======
db.sequelize.sync().then((result)=>[
    app.listen(port, ()=>{
        console.log(`Database Connected \nServer Run this Port ${port}`)
    })
]).catch((err)=>{
    console.log(err)
})
