class StorageController {
  static getItemsFromStorage() {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
  }

  static addItemLS(item) {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem("items"));
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    }
  }

  static deleteAllFromLS() {
    localStorage.removeItem("items");
  }
}
