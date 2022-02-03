const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    userMessage: {
        type: 'string',
        trim: true,
        required: true
    },
    requestCount: {
        type: 'number',
        required: true,
        default: 0
    },
    createdTime: {
        type: 'date',
        default: + new Date()

    }
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User