// models/itemModel.js
let items = [];
let nextId = 1;

class Item {
  constructor(name) {
    this.id = nextId++;
    this.name = name;
  }

  static getAll() {
    return items;
  }

  static getById(id) {
    return items.find(item => item.id === parseInt(id));
  }

  static create(name) {
    const newItem = new Item(name);
    items.push(newItem);
    return newItem;
  }

  static update(id, name) {
    const item = Item.getById(id);
    if (item) {
      item.name = name;
      return item;
    }
    return null;
  }

  static delete(id) {
    const index = items.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return null;
  }
}

module.exports = Item;
