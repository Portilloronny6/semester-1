document.querySelector("#farmacyForm").addEventListener("submit", () => {
  StorageController.deleteAllFromLS();

  const formEl = document.forms.farmacyForm;
  console.log(formEl);

  const formData = new FormData(formEl);

  formData.forEach((value) => {
    StorageController.addItemLS(value);
  });
});
