// import { object } from "webidl-conversions"

const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.post('/users/bulk',async (req, res) => {
    await User.insertMany(req.body).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)  // Failure
    })
})