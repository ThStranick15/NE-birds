const {model, Schema} = require('mongoose')

const QuestionSchema = new Schema({
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
    },
    choices:{
        type:[String]
    }
})

const Question = model('Question', QuestionSchema)

module.exports = Question