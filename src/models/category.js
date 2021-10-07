const { CATEGORIES } = require('../util/dummy');

module.exports = class Category {
  constructor(description) {
    this.category = CATEGORIES[CATEGORIES.length - 1].category + 1;
    this.description = description;
  }

  save() {
    CATEGORIES.push(this);
  }

  static findById(id) {
    return CATEGORIES.filter((e) => e.category === Number(id));
  }

  static fetchAll() {
    return CATEGORIES;
  } 
}