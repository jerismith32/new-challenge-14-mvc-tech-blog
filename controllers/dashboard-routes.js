const router = require('express').Router();
//Connects to connection.js
const sequelize = require('../config/connection');
//Pulls in our User, Blogpost and Comment Models
const { User, Blogpost, Comment } = require('../models');
//Authentication to check for login/user capability
const withAuth = require('../utils/auth');

// This will get all Blogposts with Authentication
//With Authentication makes sure the user is logged in
router.get('/', withAuth, (req, res) => {
    // console.log(req.session);
    // console.log('======================');
    Blogpost.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'blog_title',
        'blog_body'
      ],
      include: [
        {
            model: User,
            attributes: ['username']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_body', 'Blogpost_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
      ]
    })
      .then(dbBlogpostData => {
        const blogs = dbBlogpostData.map(Blogpost => Blogpost.get({ plain: true }));
        res.render('Dashboard', { blogs, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;