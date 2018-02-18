const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Please enter the name of your task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)