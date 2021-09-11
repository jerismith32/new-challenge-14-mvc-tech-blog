const router = require('express').Router();
//This will allow us to use our models for User, Blogpost and Comment
const { User, Blogpost, Comment } = require('../../models');

module.exports = router;