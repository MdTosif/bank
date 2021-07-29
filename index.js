const express = require('express');
const cookieParser = require('cookie-parser');
const { signup, login, isLogin } = require('./controller/auth');
const { getBranchesAutocomplete, getBranches } = require('./controller/bank');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.post('/api/signup', signup);

app.post('/api/login', login);

app.get('/api/branches/autocomplete', isLogin, getBranchesAutocomplete);

app.get('/api/branches', isLogin, getBranches);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  res.status(400).json({ error: err.message });
});

app.listen(3000);
