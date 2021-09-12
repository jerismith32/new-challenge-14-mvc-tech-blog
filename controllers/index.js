const router = require('express').Router();

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const apiRoutes = require('./api/');

//This allows us to point to the home-routes.js file
router.use('/', homeRoutes);
//This allows us to point to the dashboard-routes.js file
router.use('/dashboard', dashboardRoutes);
//This allows us to point to the api directory which holds the routes for each model
router.use('/api', apiRoutes);

module.exports = router;