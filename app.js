const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const session = require('express-session');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use(session({
  secret: 'your_session_secret',
  resave: false,
  saveUninitialized: true,
}));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
