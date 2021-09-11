const router = require('express').Router();
//Connects to connection.js
const sequelize = require('../config/connection');
//Pulls in our User, Blogpost and Comment Models
const { User, Blogpost, Comment } = require('../models');
//Authentication to check for login/user capability
const withAuth = require('../utils/auth');