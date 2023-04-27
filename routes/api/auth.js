const express = require("express");

const ctrl = require('../../controllers/auth');
const authenticate = require('../../middlewares/authenticate');
const validate = require('../../helpers/validate');
const schema = require('../../schemas/users');

const router = express.Router();

router.post('/register', validate.body(schema.registerSchema), ctrl.register);

router.post('/login', validate.body(schema.loginSchema), ctrl.login);

router.post('/logout', authenticate, ctrl.logout);

router.put('/', authenticate, ctrl.updateData);

router.get('/current', authenticate, ctrl.current);

// router.patch('/avatar', authenticate, upload.single("avatar"), ctrl.updateAvatar);

module.exports = router;