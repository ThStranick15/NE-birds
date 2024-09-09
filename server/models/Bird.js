const {model, Schema} = require('mongoose')

const BirdSchema = new Schema({
    name:{
        type: String,
        unique: true
    },
    img:{
        type: String,
        unique: true
    },
    call:{
        type: String,
        unique: true
    },
    text:{
        type: String,
        unique: true
    }
})

const Bird = model('Bird', BirdSchema)

module.exports = Bird