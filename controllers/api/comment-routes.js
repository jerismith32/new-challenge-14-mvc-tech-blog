const router = require('express').Router();
//Connects to our Comment Model
const { Comment } = require('../../models');
//Utilizes the Authentication
const withAuth = require('../../utils/auth');

//Route to Find All Comments
router.get('/', (req, res) => {
    Comment.findAll()
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

//Route to Create a Comment
router.post('/', withAuth, (req, res) => {
    Comment.create({
    comment_body: req.body.comment_text,
    user_id: req.session.user_id,
    blogpost_id: req.body.blogpost_id
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


module.exports = router;
