const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  const payload = {
    userId: user._id,
    email: user.email,
  };

  const secretKey = '6i6r8nitd3'; // Replace with a strong, unique secret key
  const options = { expiresIn: '1h' }; // Token expiration time

  return jwt.sign(payload, secretKey, options);
};

module.exports = { generateToken };
