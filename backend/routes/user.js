const express = require('express');
const User = require('../models/user');
const {createToken} = require('../helpers/token');
const router = new express.Router();
const {
    NotFoundError,
    BadRequestError,
    UnauthorizedError
} = require('../expressError');


/**GET: A List of all Users 
 * 
*/

router.get('/', async (req, res, next) => {
    try{
        const results = await User.findAll();

        return res.status(200).json({results});
    } catch(err){
        return next(err);
    }

})


/**GET: Get details on a user 
 * 
 * Return user information
*/

router.get('/details/:username', async (req, res, next) => {
    console.log("I'm here")
    try{
        const {username} = req.params;
        const user = await User.get(username);
        return res.status(200).json(user)
    } catch(err){
        return next(err);
    }
})


/** POST: Register user 
 * 
 * Return token for future authentication
 * 
 */

router.post('/register', async (req, res, next) => {
    try{
        console.log('req.body: ', req.body)
        const newUser = await User.register({...req.body, isAdmin:false});
        const newToken = createToken(newUser);
        return res.status(201).json(newToken);
    } catch(err){
        return next(err)
    }
});


/** GET: Authenticate User
 * 
 * 
 */

router.get('/token', async (req, res, next) => {
    try{
        const {username, password} = req.query;
        const user = await User.authenticate(username, password);
        const token = createToken(user);
        return res.status(200).json(token);
    } catch(err) {
        return next(err);
    }
})

/** PATCH: Update User information
 * 
 * 
 */

router.patch('/:username/update', async (req, res, next) => {
    console.log("I'm here too")
    try{
        const {username} = req.params;
        const user = await User.update(username, {...req.body});

        return res.status(204).json({user});
    } catch(err){
        return next(err);
    }
});

/** DELETE: Delete user
 * 
 * Throw NotFound Error if no user
 */

router.delete('/:username', async (req, res, next) => {
    try{
        const {username} = req.params;

        await User.remove(username);

        return res.status(204).json({deleted: username});
    } catch(err) {
        return next(err);
    }
}) 

module.exports = router