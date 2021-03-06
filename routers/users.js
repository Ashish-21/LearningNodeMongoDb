const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async(request, response) => {
  console.log('Fetching Users');
  try {
    const Users = await User.find();
    response.json(Users);
  } catch (error) {
    response.send('Error Occurred:' + error);
  }
});

router.get('/:id', async(request, response) => {
  console.log('Fetching user by their ID');
  try {
    const User1 = await User.findById(request.params.id);
    response.json(User1);
  } catch (error) {
    response.send('Error Occurred:' + error);
  }
});

router.post('/', async(request, response) => {
  console.log('Saving user in DB');
  try {
    const User1 = new User({
      userName: 'Sandeep',
      password: 'Sandeep123',
      emailId: 'Sandeep@Cateina.in',
    });
    const saveUser = await User1.save();
    response.json(saveUser);
  } catch (error) {
    console.log('Error Occurred :' + error);
  }
});

/* router.delete('/:id', (request, response) => {
  console.log('Deleting User from DB');
  try {
    const user = User.findByIdAndRemove(request.params.id);
    console.log(user);
  } catch (error) {
    console.log('Error Occurred' + error);
  }
});
 */
module.exports = router;
