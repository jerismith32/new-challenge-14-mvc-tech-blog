const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Blogpost extends Model {}

Blogpost.init(
    {
        //Creates id for each Blogpost (saved in database)
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //Blog Post Title, can't be left blank
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     notNull: {
            //         msg: 'Please enter the title for your blog post!'
            //     }
            // }
        },
        //Body of the blog post, must be at least 1, aka can't be left blank
        blog_body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        //User id for the user posting the blog post
        user_id: {
            type: DataTypes.INTEGER,
            references: {
            model: 'user',
            key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blogpost'
    }
);

module.exports = Blogpost;