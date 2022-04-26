const express = require('express')
const app = express()
const exphbs = require('express-handlebars').engine
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const Port = 3000
const routes = require('./routes')
const session = require('express-session')
const usePassport = require('./config/passport')
const flash =require('connect-flash')

app.engine('hbs' ,exphbs({defaultLayout:'main',extname:'hbs'}))
app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(session({
  secret:'sessionSecret',
  resave:false,
  saveUninitialized:true
}))
usePassport(app)
app.use(flash())
app.use((req,res,next) =>{
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  res.locals.error = req.flash('error')
  next()
})
app.use(routes)


app.listen(Port,() =>{
  console.log(`This server is running on http://localhost:${Port}`)
})