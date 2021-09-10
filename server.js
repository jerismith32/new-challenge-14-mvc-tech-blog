const path = require('path');
//Utilizies Express
const express = require('express');
//Calls in Express-Session
const session = require('express-session');
//This is what will allow us to use the express-handlebars
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3232;

//Connects to the connection.js file in the config directory
const sequelize = require("./config/connection");
//Stores the session
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//Utilizes the helpers.js file in the utils directory for formatting
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });
//Set handlesbars as our engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//This is for our routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});