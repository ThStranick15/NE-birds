const router = require('express').Router();
const {Bird,Question} = require('../models')

//GET all birds /api/birds
router.get('/birds', async (req,res) => {
    try {   
        const birds = await Bird.find()
        res.json(birds)
    } catch (error) {
        console.log(error)
    }
})

//GET all questions /api/questions
router.get('/questions', async (req,res) => {
    try {
        const questions = await Question.find()
        res.json(questions)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;