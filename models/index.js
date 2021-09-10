//This is going to conenct to all the other models for the App 
const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment');

//This will create all the associations or interactions for the app

User.hasMany(Blogpost, {
    foreignKey: 'user_id'
});
  
Blogpost.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Comment.belongsTo(Blogpost, {
    foreignKey: 'Blogpost_id',
    onDelete: 'SET NULL'
});
  
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
  
Blogpost.hasMany(Comment, {
    foreignKey: 'Blogpost_id'
});

module.exports = { User, Blogpost, Comment }