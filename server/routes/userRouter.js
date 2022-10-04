const {Router} = require('express');
const UserController = require('../controllers/user.controller');
const { upload } = require('../middleware/upload.mw');
const userRouter = Router();

userRouter.post('/', upload ,UserController.createUser)
//userRouter.get('/')
//userRouter.get('/:userId')
//userRouter.patch('/:userId')

module.exports = userRouter;