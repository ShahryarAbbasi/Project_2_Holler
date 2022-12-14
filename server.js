const express = require('express')
const methodOverride = require('method-override');
require('dotenv').config();
require('./config/db.connection')
const app = express()
const PORT = 4000
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(methodOverride('_method'));
app.get('/', (req, res)=> {
    res.render('home.ejs')
})
app.get('/404', (req,res)=>{
  res.render('404.ejs')
})
// Linking users.js router
const userRouter = require("./config/users_controller");
app.use("/user", userRouter);
// Linking holler.js router
const hollerRouter = require("./config/hollers_controller");
app.use("/hollers", hollerRouter);

app.listen(process.env.PORT || 4000);
