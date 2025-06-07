const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const sessionRoutes = require('./routes/session.routes');
require('dotenv').config();
 

const app = express();

// MongoDB Connection
const uri = "mongodb+srv://node:node123@2k24.imdth.mongodb.net/?retryWrites=true&w=majority&appName=2k24";

mongoose.connect(uri)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
// app.use(cors()); 
app.use(express.json());


// Routes
app.use('/api/session', sessionRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


