const { BlogPost } = require('../models');

const blogpostSeedData = [
    {
        blog_title: 'Why You Should Visit Disney World',
        blog_body: 'It is where dreams come true! AND makes the perfect family vacation spot!',
        user_id: 1
    },
    {
        blog_title: 'Disney World Turns 50',
        blog_body: 'Can you believe WDW turns 50 on October 1, 2021?!?! Will you be making a trip to celebrate this monumentous occasion?',
        user_id: 1
    },
    {
        blog_title: 'My Favorite Things',
        blog_body: 'In life, you have to appreciate all the little things. Some of my favorite things are: the smell of fresh made bread, a daisy flower, and time with Mickey! What are some of your favorite things?',
        user_id: 2
    }
];

const seedBlogPosts = () => BlogPost.bulkCreate(blogpostSeedData);

module.exports = seedBlogPosts;
