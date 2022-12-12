// Basic setting
const express = require('express');
require('dotenv').config()
const app = express();

// Middlware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// using the useroutes
const userRoutes = require('./userRoutes/userRoutes');
const connectionDB = require('./config/database_connection');
connectionDB();
app.use('/',userRoutes);
// exporting the module to others
module.exports = app;