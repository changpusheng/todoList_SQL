const express = require('express')
const app = express()
const exphbs = require('express-handlebars').engine
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const Port = 3000

app.engine('hbs' ,exphbs({defaultLayout:'main',extname:'hbs'}))
app.set('view engine','hbs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('method'))

app.get('/',(req,res) =>{
  res.send('hello world')
})

app.listen(Port,() =>{
  console.log(`This server is running on http://localhost:${Port}`)
})