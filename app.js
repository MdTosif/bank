const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const http = require('http').Server(app);
const { signup, login, isLogin } = require('./controller/auth');
const { getBranchesAutocomplete, getBranches } = require('./controller/bank');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.get('/noti', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post('/api/signup', signup, login);

app.post('/api/login', login);

app.get('/api/branches/autocomplete', isLogin, getBranchesAutocomplete);

app.get('/api/branches', isLogin, getBranches);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({ error: err.message });
});

module.exports = http;
