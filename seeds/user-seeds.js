const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'MickeyMouse32',
        email: 'mickeymouse@disney.com',
        password: 'disneyismagic123'
    },
    {
        username: 'MinnieMouse45',
        email: 'minniemouse@disney.com',
        password: 'ilovemickey1'
    },
    {
        username: 'DonaldDuck78',
        email: 'donaldduck@disney.com',
        password: 'daisylover9'
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;