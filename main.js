// load libraries and modules
const express = require('express');
const morgan = require('morgan');

// define PORT, default being 8080
const PORT = parseInt(process.argv[2]) || parseInt(process.env.PORT) || 8080;

// create an instance of the app
const app = express();

// setup routes by defining middlewares
// setup Morgan for logging HTTP requests.. the first route as all HTTP requests must be logged
app.use(morgan('combined'));

// define default static web process
app.use(express.static(__dirname + '/public'));

// start the express server
app.listen(PORT, () => {
    console.info(`Server was started at port ${PORT} on ${new Date()}`);
});