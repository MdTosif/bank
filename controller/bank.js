const { getBranches, getBranchesAutocomplete } = require('../model/bank');

exports.getBranches = async (req, res, next) => {
  try {
    const { q, limit, offset } = req.query;
    const data = await getBranches(q, offset, limit);
    res.json({ branches: data });
  } catch (e) {
    next(e);
  }
};

exports.getBranchesAutocomplete = async (req, res, next) => {
  try {
    const { q, limit, offset } = req.query;
    const data = await getBranchesAutocomplete(q, offset, limit);
    res.json({ branches: data });
  } catch (e) {
    next(e);
  }
};
