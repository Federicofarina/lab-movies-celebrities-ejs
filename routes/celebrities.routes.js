const Celebrity = require('../models/Celebrity.model')

const router = require('express').Router()

// all your routes here

router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
});

router.post('/create', async (req, res) => {
    try {
        const newCelebrity = await Celebrity.create(req.body)
        console.log(newCelebrity)
        res.redirect('/celebrities/${newCelebrity._Id}')
    } catch(error) {
        console.log(error)
    }
})

router.get('/:celebrityId', async (req, res) => {
    try {
        const celebrities = await Celebrity.findById(req.params.celebrityId)
        console.log(celebrities)
        if (!celebrities) {
            console.log(error)
        } else {
            res.render('celebrities/celebrities', celebrities)
        }
    } catch (error) {
        console.log(error) 
    }
    })
module.exports = router

