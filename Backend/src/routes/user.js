
const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/profile', userCtrl.profile);
router.put('/modifyBadges', userCtrl.modifyBadges);
router.put('/modifyProfile', userCtrl.modifyProfile);

module.exports = router;
