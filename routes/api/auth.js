const express = require("express");

const ctrl = require('../../controllers/auth');
const { authenticate } = require('../../middleWares');

const router = express.Router();

router.post('/register', ctrl.register);

router.post('/login', ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.patch('/avatars', authenticate, ctrl.updateAvatar);

router.put('/', authenticate, )

module.exports = router;