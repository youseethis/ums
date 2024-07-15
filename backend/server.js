// File name : backend/server.js 
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.path}`);
  next();
});

// Set Mongoose options
mongoose.set('strictQuery', false);

// Routes
app.use('/users', userRoutes);

// Connect to the database and start the server
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
