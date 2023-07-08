const express = require('express');
const { test , user} = require('../controllers/controller');


const router = express.Router();

router.get('/', test);
router.post('/user', user);

module.exports = router;