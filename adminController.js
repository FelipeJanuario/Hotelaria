const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.createUser = async (req, res) => {
  const { username, password, role } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  
  try {
    await User.findByIdAndDelete(userId);
    
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};
