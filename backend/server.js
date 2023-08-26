const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const { MONGODURL } = require('./config');

const app = express();
const port = 5000;

// Use the cors middleware to allow all origins
app.use(cors(
  {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  },
));


app.use(express.json());

mongoose
  .connect(MONGODURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const reset = require('./routes/reset');
const verifyEmail = require('./routes/verifyregister');
const resetEmail = require('./routes/verifyreset');

app.use(loginRoute);
app.use(registerRoute);
app.use(reset);
app.use(verifyEmail);
app.use(resetEmail);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
