const router = require('express').Router();
//connects to the connection.js file in the config directory
const sequelize = require('../config/connection');
//Pulls in our models
const { User, BlogPost, Comment } = require('../models');