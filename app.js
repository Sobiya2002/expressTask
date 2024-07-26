const express = require('express');
const connectDB = require('./config/db'); 
const route = require('./routes/taskRoutes')

const app = express();
app.use(express.json());

app.use('/api/tasks' , route);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
