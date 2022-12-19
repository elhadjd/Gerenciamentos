const express = require("express")
require('dotenv').config()
const session = require('express-session')
const cors = require('cors')
const fileupload = require('express-fileupload')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const clientController = require('./app/controllers/ClientController')
const { CheckToken } = require("./app/middleware/authToken")
const app = express()
const port = 1981


const userController = require('./app/controllers/userController')

// config json response
app.use(express.json())

// Models
const User = require('./app/models/User')

// Routers autorisation
app.use(cors({credentials: true, origin: 'http://18.231.173.211:1981',}))


// Private Route
app.get("/user/:id",CheckToken,userController.GetUser)

// Register Client
app.post('/registerClient',CheckToken,clientController.RegisterClient)

// Get Clients
app.get('/GetClients',CheckToken,clientController.GetClients)

// Routers
app.get('/',(req,res)=>{
    res.status(200).json({msg: 'Bem vindo ao nossa api  fasdfdgadghdfghdfhdf'})
})
// Register user
app.post('/auth/register',userController.NewUser)

// Login User
app.post('/auth/login',userController.Login)

// credencials 

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.qjkdtnf.mongodb.net/?retryWrites=true&w=majority`)
.then((success)=>{
    app.listen(port,function(){
        console.log(`servidor http://localhost:${port}`);
    });
}).catch((err)=>console.log(err))
