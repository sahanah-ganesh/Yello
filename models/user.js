// Import the database
const db = require('../db/config');

// Instantiate a new object.
// This will interface with the yello database.
// Specifically, the users table.
const User = {};

// Define methods for the user object

// Returns all users from the table
User.findAll = () => {
  return db.query(
    `SELECT * FROM users`
  );
};

// Return one user with the specific id
User.findById = (id) => {
  return db.oneOrNone(
    `
      SELECT * FROM users
      WHERE id = $1
    `,
    [id]
  );
};

// Export the user object
module.exports = User;