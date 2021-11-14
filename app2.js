function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

data = StorageController.getItemsFromStorage();

document.querySelector(".name").innerHTML = `Имя: <b>${capitalize(data[1])}</b>`;
document.querySelector(".last-name").innerHTML = `Фамилия: <b>${capitalize(data[0])}</b>`;
document.querySelector(".age").innerHTML = `Возрастная группа: <b>${capitalize(data[2])}</b>`;
document.querySelector(".user-condition").innerHTML = `<b>${capitalize(data[3])}</b>`;
let list = "";
for (let index = 4; index < data.slice(4).length + 3; index++) {
  if (data[index] !== "") {
    list += `<li><b>${capitalize(data[index])}</b></li>`;
  }
}
document.querySelector(".options").innerHTML = list;
document.querySelector(".recommendations").innerHTML = `<b>${capitalize(data[data.length - 1])}</b>`;
