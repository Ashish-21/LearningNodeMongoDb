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
const users = [
  {
    username: 'ashish',
    Lastname: 'chandwani',
  },
  {
    username: 'sandeep',
    Lastname: 'sahani',
  },
];

app.get('/users', authenticateToken, (req, res) => {
  console.log('Running Server');
  res.json(users.filter((user) => user.username === req.user.name));
});

app.post('/login', (req, res) => {
  console.log('Post Data');
  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, process.env.SECRETKEY);
  res.cookie('token', accessToken, { maxAge: 2 * 1000 });
  res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).end();
  }
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.SECRETKEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(9000, () => {
  console.log('Server is Listening');
});
