const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{
        taskId: {
            type: String,
            required: true,
            unique: true
        },
        taskName: {
            type: String,
            required: true
        },
        taskOwner: {
            type: String,
            required: true
        },
        taskStatus: {
            type: String,
            enum: ['Defined', 'Inprogress', 'Completed'],
            default: 'Defined'
        }
    }
   
});

module.exports = mongoose.model('Task', taskSchema);