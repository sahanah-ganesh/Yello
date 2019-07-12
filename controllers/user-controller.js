// Import the User model.
const User =  require('../models/user');

// Instantiate the controller object
const userController = {};

// Controller method for handling a request for all users
userController.findAll = (req, res) => {
  // Uses the findAll method from User
  User.findAll()
  .then(users => {
    // Sends the users as a JSON object
    res.json({
      message: 'Success',
      data: users
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Controller method for handling a request for a single user
userController.findById = (req, res) => {
  // Users method for finding by id, passes the id as an argument
  User.findById(req.params.id)
  .then(user => {
    // Sends the user as a JSON object
    res.json({
      message: "Success",
      data: user
    });
  })
  .catch(err => {
    // If something goes wrong it logs the error in the console and sends it as a JSON object
    console.log(err);
    res.status(500).json({err});
  });
};

// Export the controller
module.exports = userController;