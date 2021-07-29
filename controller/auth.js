const jwt = require('jsonwebtoken');
const { addUser, getUserByEmail } = require('../model/user');

const { jwtSecret } = require('../config');

exports.signup = async (req, res, next) => {
  try {
    const { body } = req;
    await addUser(body);
    next();
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const authUser = await getUserByEmail(email);
    if (authUser && (password === authUser.password)) {
      const token = await jwt.sign({ userId: authUser.id }, jwtSecret, {
        expiresIn: '1d',
      });
      res.cookie('jwt', token);
      res.json({ token });
    } else throw new Error('password invalid');
  } catch (e) {
    next(e);
  }
};

exports.isLogin = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    await jwt.verify(token, jwtSecret);
    req.user = jwt.decode(token);
    next();
  } catch (error) {
    next(error);
  }
};
