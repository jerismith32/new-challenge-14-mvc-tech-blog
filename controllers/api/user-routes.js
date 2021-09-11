const router = require('express').Router();
//This will allow us to use our models for User, Blogpost and Comment
const { User, Blogpost, Comment } = require('../../models');

//Route for when a new user creates an account
//Ensures saving of username, email, and password
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
    
          res.json(dbUserData);
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;