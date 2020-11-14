const router = require("express").Router();
const userController = require("./controllers/userController");

router.get('/api/users',
    // checkJwt, 
    (req, res) => {
        console.log(`got to here: ${JSON.stringify(req.query)}`);
        return userController.findAll(req, res);
    });
router.get('/api/users/:id',
    // checkJwt, 
    (req, res) => {
        console.log(`got to here: ${JSON.stringify(req.query)}`);
        return userController.findById(req, res);
    });
router.get('/api/user/',
    // checkJwt, 
    (req, res) => {
        console.log(`got to here for email: ${JSON.stringify(req.query)}`);
        return userController.findByEmail(req, res);
    });
router.post('/api/user/:id',
    // checkJwt, 
    (req, res) => {
        console.log(`update user ${req.params.id}: ${JSON.stringify(req.json())}`);
        return userController.update(req, res);
    });
router.get('/api/findOrCreateUser/',
    // checkJwt, 
    (req, res) => {
        console.log(`find or creatte for email: ${JSON.stringify(req.query)}`);
        return userController.findOrCreateUser(req, res);
    });
router.post('/api/addGiftToUser/',
    // checkJwt, 
    (req, res) => {
        console.log(`addGiftToUser ${JSON.stringify(req.query)} ${JSON.stringify(req.body)}`);
        return userController.addGiftToUser(req, res);
    });
module.exports = router;
