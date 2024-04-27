const jwt = require('jsonwebtoken')

//to retrieve JWT Secret from .env file
require('dotenv').config()

const CustomAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const {username, password} = req.body
    if(!username || !password){
        throw new CustomAPIError('Please provide username and password',400)
    }

    //custom ID since we're not using any DBMS
    const id = new Date().getDate()

    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg: 'User created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, John`,secret:`Here is your authorized data,Your lucky number is ${luckyNumber}`})
}

module.exports = {login,dashboard}