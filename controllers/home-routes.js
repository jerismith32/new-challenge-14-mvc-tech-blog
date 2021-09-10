const router = require('express').Router();
//connects to the connection.js file in the config directory
const sequelize = require('../config/connection');
//Pulls in our models
const { User, Blogpost, Comment } = require('../models');

//We want to get all the blog posts for the homepage
router.get('/', (req, res) => {
    //Finds all Blog posts and includes blog title and blog body
    Blogpost.findAll({
        attributes: [
            'id',
            'blog_title',
            'blog_body'
        ],
        //Will also include the associated user (creator of the blog post)
        include: [
            {
                model: User,
                attributes: ['username']
            },
            //Includes any comments on the blog post
            {
                model: Comment,
                attributes: [ 'comment_body'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbBlogpostData => {
        const blogs = dbBlogpostData.map(Blogpost => Blogpost.get({ plain: true }));
  
        console.log("Blogposts from the home-routes", blogs);

        res.render('homepage', {
          blogs,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//Exports router
module.exports = router;