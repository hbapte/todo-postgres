import express from 'express'
import taskController from '../modules/tasks/controller/taskController'
import { authenticateToken } from '../middleware/authMiddleware';
const taskRouter = express.Router();


//Get all tasks
taskRouter.get('/', taskController.getTasks);

//Get task by id
taskRouter.get('/get-todo',authenticateToken, taskController.getTaskByUser)

//Create Task
taskRouter.post('/',taskController.createTask)

//edit task
taskRouter.put('/:id',authenticateToken,taskController.updateTask)

//delete task
taskRouter.delete('/:id',authenticateToken,taskController.deleteTask)

export default taskRouter;