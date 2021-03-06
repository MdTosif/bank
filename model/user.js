const Mongoose = require('./db');

const userSchema = Mongoose.Schema({
  email: {
    type: String,
    Minlength: 5,
    Maxlength: 50,
    required: true,
    unique: true,
    dropDups: true,
  },
  password: {
    type: String,
    Minlength: 5,
    Maxlength: 50,
    required: true,
    select: false,
  },
});

const UserModel = Mongoose.model('user', userSchema);

async function getUsers() {
  const users = await UserModel.find();
  return users;
}
async function getUser(id) {
  const users = await UserModel.findById(id);
  return users;
}

async function getUserByEmail(email) {
  const user = await UserModel.findOne({ email }).select('+password');
  return user;
}

async function addUser(body) {
  const user = new UserModel(body);

  const result = await user.save();
  return result;
}

async function updateUser(id, body) {
//   const result = await ProductModel.findByIdAndUpdate(id, { name, price }, { rawResult: true });
  const result = await UserModel.updateOne({ _id: id }, body, { returnDocument: true });
  return result;
}

async function deleteUser(id) {
  const user = await UserModel.findById(id);
  const result = await user.remove();
  return result;
}

module.exports = {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  getUserByEmail,
  addUser,
};
