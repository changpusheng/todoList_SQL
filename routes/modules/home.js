const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()
const db = require('../../models')
const User = db.User
const Todo = db.ToDo

router.get('/', (req, res) => {
  const userId = req.user.id
  return Todo.findAll({ where: { UserId: userId }, raw: true, nest: true }).then(todos =>
    res.render('home', { todos })
  ).catch(error => res.status(422).join(error))
})

router.get('/todos/new', (req, res) => {
  res.render('new')
})

router.post('/todos/new', (req, res) => {
  const { name } = req.body
  if (name.trim() == '') {
    return res.render('new', { warning_msg: '不能空白' })
  }
  return Todo.create({
    name,
    UserId: req.user.id
  }).then(() => res.redirect('/'))
    .catch(error => console.log('create:' + error))
})

router.get('/todos/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id).then(todos => res.render('detail', { todos: todos.toJSON() }))
    .catch(error => console.log(error))
})

router.get('/todos/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id).then(todos => res.render('edit', { todos: todos.toJSON() }))
    .catch(error => console.log(error))
})

router.put('/todos/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body
  Todo.findByPk(id).then(todos => {
    todos.name = name,
      todos.isDone = isDone === 'on'
    return todos.save()
  }).then(() => res.redirect(`/`))
    .catch(error => console.log(error))
})

router.delete('/todos/:id', (req, res) => {
  const id = req.params.id
  Todo.findByPk(id).then(todos => {
    return todos.destroy()
  }).then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router