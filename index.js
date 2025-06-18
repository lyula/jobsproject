const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/users.models.js');
const userRoutes = require('./routes/users.routes.js');
const PORT = process.env.PORT || 3000;

//json middleware
app.use(express.json());

//connect to MongoDB
mongoose.connect('mongodb+srv://sacredlyula:XXXXAHHGAJ@tuesday.yzf3bah.mongodb.net/PLP-Students?retryWrites=true&w=majority&appName=tuesday')
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    });



//defaulte route
app.get('/', (req, res) => {
  res.send('Hello, World!These are PLP students');
});

//Everything users
app.use('/api/users', userRoutes);
