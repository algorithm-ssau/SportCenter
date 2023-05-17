const { Router } = require('express')
const Todo = require('../models/Todo')
const router = Router()



router.get('/', async(req, res) => {
    const todos = await Todo.find({})

  res.render('index', {
    title: 'Sport-Center',//заголовок в странице
    isIndex: true,
    todos

  }) 
  })

  router.get('/create', (req, res) => {
  
    res.render('create', {
        title: '4564',
        isCreate: true
      })  
    })
    router.get('/trainers', (req, res) => {
  
        res.render('trainers', {
            title: 'Тренера',
            isTrainers: true
          })  
        })
    router.get('/costs', (req, res) => {
  
            res.render('costs', {
                title: 'Прайс',
                isCosts: true
              })  
            })

            router.get('/napr', (req, res) => {
  
                res.render('napr', {
                    title: 'Напревления',
                    isNapr: true
                  })  
                })

    router.post('/create', async (req, res) => {
        const todo = new Todo({
          name1: req.body.name1
        })
      
        //await todo.save()
        res.redirect('/')
      })
module.exports = router
