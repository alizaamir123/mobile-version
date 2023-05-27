const formData = JSON.parse(localStorage.getItem('form-data')) || {
  name: '',
  email: '',
  message: '',
};
const inputList = [
  document.getElementById('name'),
  document.getElementById('email'),
  document.getElementById('message'),
];
function updateFormData() {
  inputList.forEach((input) => {
    input.addEventListener('input', () => {
      formData[input.id] = input.value;
      localStorage.setItem('form-data', JSON.stringify(formData));
    });
    input.value = formData[input.id];
  });
}
updateFormData();
