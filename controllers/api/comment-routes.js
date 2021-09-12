const router = require('express').Router();
//Connects to our Comment Model
const { Comment } = require('../../models');
//Utilizes the Authentication
const withAuth = require('../../utils/auth');

module.exports = router;
