const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');
const bodyparser = require('body-parser');

const { NotFoundError } = require('./expressError');
const userRoutes = require('./routes/user');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

//User Routes
app.use('/user', userRoutes);

//Route to talk to Google Places API
app.get(`/maps/api/place/nearbysearch/location`, async (req, res, next) => {
	const { lat, lng, radius, type, key } = req.query;
	const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}
  %2C${lng}&radius=${radius}&type=${type}&key=${key}`;
	try {
		const results = await axios.get(url);
		console.log(results);
		return res.json(results.data);
	} catch (err) {
		return next(err);
	}
});

//Route to talk to Google Place Details API
app.get('/maps/api/place/details/place_id', async (req, res, next) => {
	const {place_id, fields, key} = req.query;
	const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&fields=${fields}&key=${key}`;
	
	try{
		const results = await axios.get(url);
		return res.json(results.data);
	} catch(err){
		return next(err);
	}
});

/** Handle 404 errors -- this matches everything */
app.use(function(req, res, next) {
	return next(new NotFoundError());
});

app.use(function(err, req, res, next) {
	// the default status is 500 Internal Server Error
	let status = err.status || 500;
	let message = err.message;

	// set the status and alert the user
	return res.status(status).json({
		error: { message, status }
	});
});

module.exports = app;
