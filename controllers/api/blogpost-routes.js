const router = require('express').Router();
//Connects to the connection.js file
const sequelize = require('../../config/connection');
//Allows us to utilize our models
const { User, Blogpost, Comment } = require('../../models');
//Utilizes our authentication
const withAuth = require('../../utils/auth');

module.exports = router;
