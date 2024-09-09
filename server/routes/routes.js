const router = require('express').Router();
const Bird = require('../models/Bird')

//GET all birds /api/birds
router.get('/birds', async (req,res) => {
    try {   
        const birds = await Bird.find()
        res.json(birds)
    } catch (error) {
        console.log(error)
    }
})

//GET bird by name
router.get('/birds/:name', async(req,res) => {
    const name = req.params.name
    try {
        const bird = await Bird.find({name: name})
        res.json(bird)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;