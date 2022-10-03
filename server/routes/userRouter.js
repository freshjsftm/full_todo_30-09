const {Router} = require('express');
const UserController = require('../controllers/user.controller')
const userRouter = Router();

userRouter.post('/', UserController.createUser)
//userRouter.get('/')
//userRouter.get('/:userId')
//userRouter.patch('/:userId')

module.exports = userRouter;