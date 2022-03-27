const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')

const app = express();

// middleware
app.use(express.static('public'));

//get json
app.use(express.json())

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://shafara:droidchappie@cluster0.arydp.mongodb.net/node_auth';
const localDB = " mongodb://127.0.0.1:27017/node_auth"

mongoose.connect(localDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  mongoose.connection.once('open', () => console.log("Mongodb connection established successfully"))

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

app.use(authRoutes);