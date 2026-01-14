///To do List/app.js
const express = require('express');
const Routes = require('./routes/routes.task');
const cors = require('cors'); 

const app = express();
const PORT = 3080; 

app.use(express.json());
app.use(cors());

app.use('/tasks', Routes); 

app.listen(PORT, () => {
  console.log(` corriendo  http://localhost:${PORT}`);
});