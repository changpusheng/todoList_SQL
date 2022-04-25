const express = require('express')
const router = express.Router()
const db = require('../../models')
const User = db.User
const Todo = db.ToDo

router.get('/',(req,res) =>{
  return Todo.findAll({
    raw:true,
    nest:true
  }).then(todos =>
     res.render('home',{todos})
  ).catch(error => res.status(422).join(error))
})

router.get('/todos/:id',(req,res) =>{
  const id = req.params.id
  return Todo.findByPk(id).then(todos =>res.render('detail',{todos:todos.toJSON()}))
  .catch(error =>console.log(error))
})

module.exports = router