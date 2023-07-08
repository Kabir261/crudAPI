const express = require('express');
const { test , user, alluser, userbyid, userupdate, userdelete} = require('../controllers/controller');


const router = express.Router();

router.get('/', test);
router.post('/user', user);
router.get('/alluser', alluser);
router.get('/alluser/:id', userbyid);
router.put('/alluser/:id', userupdate)
router.delete('/alluser/:id', userdelete)

module.exports = router;