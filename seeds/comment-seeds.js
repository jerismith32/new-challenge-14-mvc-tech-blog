const { Comment } = require('../models');

const commentSeedData = [
    {

    }
];

const seedComments = () => Comment.bulkCreate(commentSeedData);

module.exports = seedComments;