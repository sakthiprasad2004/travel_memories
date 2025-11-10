require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/', require('./controllers/auth'));
app.use('/', require('./controllers/travelTales'));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Welcome to Travel Tales API!');
  });

app.get('/hello', (req, res) => {
    res.json({message: "hello world"});
  });
  
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}...`));