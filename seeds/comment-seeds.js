const { Comment } = require('../models');

const commentdata = [
    {
        comment_body: 'I will definitely be attending the celebrations!',
        user_id: 2,
        blogpost_id: 2
    },
    {
        comment_body: 'I am only going because I have to!',
        user_id: 3,
        blogpost_id: 2
    },
    {
        comment_body: 'Aww shucks Minnie, you are too kind!',
        user_id: 1,
        blogpost_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;