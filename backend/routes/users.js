const user = require('../controllers/users');
const express=require('express');
const router=express.Router();

router.get('/',user.getUsers);
router.get('/user/:id',user.getUser);
router.post('/registro',user.addUser);
router.post('/ingreso',user.loginUser);
module.exports=router;