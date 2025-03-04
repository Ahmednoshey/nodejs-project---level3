const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const AuthUser = require("./models/SignupSchema");
app.use(express.static('public'))
var moment = require('moment');
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
const searchRoutes = require('./routes/searchRoutes')
const deleteRoutes = require('./routes/deleteRoutes')
const addRoutes = require('./routes/addRoutes')
const updateRoutes = require('./routes/updateRoutes')
const viewRoutes = require('./routes/viewRoutes')
const adduserRoutes = require('./routes/adduserRoutes')
const loginRoutes = require('./routes/loginRoutes')
const requireAuth = require('./middleware/middleware')
const checkIfUser = require('./middleware/userData')
const updateProfileRouter=require('./routes/updateProfileRouter')

//Auto refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
require('dotenv').config()

//cookie-parser
var cookieParser = require('cookie-parser')
app.use(cookieParser())



//home
var jwt = require("jsonwebtoken");
app.get("/home",requireAuth,checkIfUser,(req, res) => {
  var decoded = jwt.verify(req.cookies.jwt, process.env.JWTSECRET_KEY);
  AuthUser.findById(decoded.id)
  .then((result) => {res.render("index",{arr:result.Data_Info,moment:moment})})
  .catch((err) => {console.log(err)})
 });

 
 app.get("/user/add.html",requireAuth,checkIfUser, (req, res) => {
 res.render("user/add")
  });

  

  app.get("*",checkIfUser);  
  app.post("*",checkIfUser);  

  app.get("/",checkIfUser, (req, res) => {
    res.render("wellcome.ejs")
     });

     app.get("/login",checkIfUser,(req, res) => {
      res.render("auth/login")
       });

       app.get("/register",checkIfUser,(req, res) => {
        res.render("auth/register")
         });
       
      
      // signup
         app.use(adduserRoutes) 
         
        
         
              //  login
       app.use(loginRoutes)  


       //signout
       app.get("/signout", (req, res) => {
        res.cookie("jwt", "", { maxAge: 1 });
        res.redirect("/");
      });


  mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(searchRoutes)   
app.use(deleteRoutes)  
app.use(addRoutes)
app.use(updateRoutes) 
app.use(viewRoutes) 
app.use(updateProfileRouter) 






  


    