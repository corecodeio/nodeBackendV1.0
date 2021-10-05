const dummy = require('../util/dummy');

module.exports.createCategory = (req, res, next) => {
  let lastCategoryId = dummy.CATEGORIES[dummy.CATEGORIES.length - 1].category;
  dummy.CATEGORIES.push({ 
                          category: ++lastCategoryId, 
                          description: req.body.description });
  res.status(200).json({ valid: true, message: 'Ok'});
}

module.exports.getCategory = (req, res, next) => {
  let category = dummy.CATEGORIES.filter((e) => e.category === Number(req.params.id));
  res.status(200).json({ valid: true, message: 'Ok', category: category });
}

module.exports.getCategories = (req, res, next) => {
  res.status(200).json({ valid: true, message: 'Ok', categories: dummy.CATEGORIES });
}
