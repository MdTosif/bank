const mongoose = require('./db');

const bankSchema = mongoose.Schema({
  ifsc: String,
  bank_id: Number,
  branch: String,
  address: String,
  city: String,
  district: String,
  state: String,
  bank_name: String,
});

bankSchema.index({ '$**': 'text' });

const BankModel = mongoose.model('bank', bankSchema);
BankModel.createIndexes();

async function getBranchesAutocomplete(branch, offset, limit) {
  const o = parseInt(offset);
  const l = parseInt(limit);
  const data = await BankModel.find({ branch: { $regex: `.*${branch}.*`, $options: 'i' } })
    .sort({ ifsc: 1 })
    .skip(o)
    .limit(l)
    .select('-_id');
  return data;
}

async function getBranches(word, offset, limit) {
  const o = parseInt(offset);
  const l = parseInt(limit);
  const data = await BankModel.find({ $text: { $search: `/.*${word}.*/i` } })
    .sort({ ifsc: 1 })
    .skip(o)
    .limit(l)
    .select('-_id');
  return data;
}

module.exports = {
  getBranches, getBranchesAutocomplete,
};
