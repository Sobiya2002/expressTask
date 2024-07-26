const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');


router.post('/', taskController.createTask);       
router.get('/', taskController.getAllTasks);       
router.get('/:taskId', taskController.getTaskById); 
router.put('/:taskId', taskController.updateTaskById); 
router.delete('/:taskId', taskController.deleteTaskById); 

module.exports = router;
