//This is going to conenct to all the other models for the App 
const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

//This will create all the associations or interactions for the app

User.hasMany(BlogPost, {
    foreignKey: 'user_id'
});
  
BlogPost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(BlogPost, {
    foreignKey: 'blogpost_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
BlogPost.hasMany(Comment, {
    foreignKey: 'blogpost_id'
});

module.exports = { User, BlogPost, Comment }