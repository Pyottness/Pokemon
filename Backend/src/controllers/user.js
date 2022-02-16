const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res, next) => {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      const user = new User({
        email: req.body.email,
        password: hash,
        username: req.body.username,
      });
      user.save().then(
        () => {
          res.status(200).json({
            message: 'User created successfully'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          })
        }
      )
    });
});
};

exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
    (user) => {
      if(!user) {
        return res.status(401).json({
          error: 'User not found!'
        });
      }
      bcrypt.compare(req.body.password, user.password).then(
        (valid) => {
          if (!valid) {
            return res.status(401).json({
              error: 'Incorrect password!'
            });
          }
          const token = jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h'});
          res.status(200).json({
            message: 'Connected',
            userId: user._id,
            token: token
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      )
    }
  );
};
