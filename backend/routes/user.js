const express = require('express');
const User = require('../models/user');
const router = new express.Router();
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError
} = require('../expressError');

router.get('/signup', async (req, res, next) => {
    try{
        const result = await User.register(req.body);
        return res.status(201).json({result});
    } catch(err){
        return next(err)
    }
});

