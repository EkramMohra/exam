const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

//Routes
router.get('/people', function (req, res) {
    Person.find({}, function (err, people) {
        res.send(people)
    })
})
 personInfo={}
 router.post('/person', function (req, res) {
  

    const p1=new Person({...req.body})
    p1.save()
    console.log(req.body)
    res.end()  

}) 
router.put('/person/:id', function (req, res) {
    const id =req.params.id
    Person.findByIdAndUpdate(id, {age:80},{new:true},function (err, people) {
        res.send(people)
    })
})

router.delete('/apocalypse', function (req, res) {
  
    Person.remove({},function (err, people) {
        res.send(people)
    })
})


module.exports = router