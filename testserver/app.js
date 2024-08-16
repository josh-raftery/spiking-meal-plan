const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const recipeRoutes = require('./recipeRoutes');

const app = express();

app.use(express.json());
app.use(cors()); 

mongoose.connect('mongodb://localhost:27017/MealPrep', {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Use the routes
app.use('/api', recipeRoutes);

app.listen(8002, () => {
  console.log("Server is running on port 8002");
});