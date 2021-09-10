//This is going to conenct to all the other models for the App 
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
//This will create all the associations or interactions for the app

module.exports = { User, BlogPost, Comment }