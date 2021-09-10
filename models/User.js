// This allows us to use models and datatypes
const { Model, DataTypes } = require('sequelize');
//so we can protect our passwords
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');