// Import express
const express = require('express');
// Define the router using the express router
const userRouter = express.Router();

// Import the userController
const userController = require('../controllers/user-controller');

// For each route access the correct controller method

// Request all users, send it to the / route
userRouter.get('/', userController.findAll);

// Request single user send it to the /:id route
userRouter.get('/:id', userController.findById);

// Export the router
module.exports = userRouter;