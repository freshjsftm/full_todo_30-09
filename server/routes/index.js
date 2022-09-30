const {Router} = require('express');
const userRouter = require('./userRouter');
const tasksRouter = require('./tasksRouter');
const router = Router();

router.use('/users', userRouter)
router.use('/users/:userId/tasks', tasksRouter)
//router.get('/tasks')

module.exports = router;