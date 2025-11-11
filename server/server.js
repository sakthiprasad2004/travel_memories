require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connectDB');

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://travel-memories-theta.vercel.app");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use('/api/user', require('./controllers/auth'));
app.use('/api/travel', require('./controllers/travelTales'));
app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
    res.send('Welcome to Travel Tales API!');
  });

app.get('/hello', (req, res) => {
    res.json({message: "hello world"});
  });
  
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}...`));