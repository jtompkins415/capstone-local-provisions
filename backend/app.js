
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');


const {NotFoundError} = require('./expressError');
const userRoutes = require('./routes/user');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

//User Routes
app.use('/user', userRoutes);


/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });

module.exports = app;
