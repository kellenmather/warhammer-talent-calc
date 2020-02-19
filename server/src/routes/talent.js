const express = require('express');
const router = express.Router();

const talentController = require('../controllers/talentController');

router.get('/get', talentController.get);

module.exports = router;