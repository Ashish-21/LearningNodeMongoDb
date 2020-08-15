const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/UsersDB';
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const mongoConnection = mongoose.connection;

mongoConnection.on('open', () => {
  console.log('Connected to MongoDB');
});

const userRouter = require('./routers/users');
app.use('/users', userRouter);
app.use(express.json());

app.listen(9000, () => {
  console.log('Server is Listening');
});
