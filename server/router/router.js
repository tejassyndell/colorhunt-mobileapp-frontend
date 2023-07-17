/* eslint-disable */
const express = require('express')
const Routes = express.Router()
const {
  getProductName
} = require('../controller/controllerM2.js')


//for login auth


// //for dashboard
// //---------------------new change 28-----------------------
Routes.get('/getProductName',getProductName);

// //---------------------new change 28-----------------------


module.exports = Routes
