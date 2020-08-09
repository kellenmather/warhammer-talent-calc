const express = require('express');
const router = express.Router();

const talentController = require('../controllers/talentController');

router.get('/getRows/:race/:lord/:type?', talentController.getRows);
router.get('/getSkills', talentController.getSkills);

module.exports = router;