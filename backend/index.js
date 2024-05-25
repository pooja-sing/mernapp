const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const User = require('./models/user');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get('/', (req, res) => res.send('API running'));


app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    try {
      let user = new User({ name, email, password });
      await user.save();
      res.send('User saved');
      console.log(user)
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
