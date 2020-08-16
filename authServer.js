require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/UsersDB';
const app = express();
const jwt = require('jsonwebtoken');
/* 
mongoose.connect(url, { useNewUrlParser: true });
const mongoConnection = mongoose.connection;

mongoConnection.on('open', () => {
  console.log('Connected to MongoDB');
});

const userRouter = require('./routers/users');
app.use('/users', userRouter);
app.use(express.json()); */
app.use(express.json());


app.post('/login', (req, res) => {
  console.log('Post Data');
  const username = req.body.username;
  const user = { name: username };
  res.json({ accessToken: accessToken });
});

function generateToken(user)
{
  const accessToken = jwt.sign(user, process.env.SECRETKEY);
  return accessToken;
}


app.listen(4000, () => {
  console.log('Server is Listening');
});
