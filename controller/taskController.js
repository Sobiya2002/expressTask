const Task = require('../models/task.model');


exports.createTask = async (req, res) => {
  const { taskId, taskName, taskOwner, taskStatus } = req.body;
  try {
    const newTask = new Task({ taskId, taskName, taskOwner, taskStatus });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getTaskById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const task = await Task.findOne({ taskId });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateTaskById = async (req, res) => {
  const { taskId } = req.params;
  const { taskName, taskOwner, taskStatus } = req.body;
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { taskId },
      { taskName, taskOwner, taskStatus },
      { new: true } 
    );
    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteTaskById = async (req, res) => {
  const { taskId } = req.params;
  try {
    const deletedTask = await Task.findOneAndDelete({ taskId });
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
