const express = require("express");

const ctrl = require('../../controllers/auth');
const authenticate = require('../../middlewares/authenticate');

const router = express.Router();

router.post('/register', ctrl.register);

router.post('/login', ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.put('/', authenticate, ctrl.updateData);

// router.patch('/avatar', authenticate, )

module.exports = router;