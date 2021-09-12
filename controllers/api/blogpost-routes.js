const router = require('express').Router();
//Connects to the connection.js file
const sequelize = require('../../config/connection');
//Allows us to utilize our models
const { User, Blogpost, Comment } = require('../../models');
//Utilizes our authentication
const withAuth = require('../../utils/auth');

// Route to find all Blogposts with the Users (who wrote them) and Comments
router.get('/', (req, res) => {
    //console.log('======================');
    Blogpost.findAll({
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
          attributes: ['id', 'comment_body', 'blogpost_id', 'user_id'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
      ]
    })
    .then(dbBlogpostData => res.json(dbBlogpostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
