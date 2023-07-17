/* eslint-disable */
const express = require('express')
const Routes = express.Router()
const {
  getProductName, getArticles, getCategory
} = require('../controller/controllerM2.js')


//for login auth


// //for dashboard
// //---------------------new change 28-----------------------
Routes.get('/getArticles', getArticles);
Routes.get('/getCategory', getCategory);

// //---------------------new change 28-----------------------


module.exports = Routes
