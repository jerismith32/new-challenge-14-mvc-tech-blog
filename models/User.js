// This allows us to use models and datatypes
const { Model, DataTypes } = require('sequelize');
//so we can protect our passwords
const bcryptjs = require('bcryptjs');
const sequelize = require('../config/connection');

class User extends Model {
//This will check the password that user is using to login to the password we have stored in our database
checkPassword(loginPw) {
    return bcryptjs.compareSync(loginPw, this.password);
  }
}

//This is how we will create our user
//This will make sure every user makes their own username, email, and password
//They will be assigned a unique id within our database
User.init(
  {
    //Creates id for each user (saved in database)
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    //Username
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notNull: {
              msg: 'Please enter your desired username!'
          }
      }
    },
    //User email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    //User password
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcryptjs.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcryptjs.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

//Exports the module so we can use the it 
module.exports = User;