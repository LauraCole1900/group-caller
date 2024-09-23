const formEl = document.getElementById('group-num-form');
const inputEl = document.getElementById('num-groups');
const pEl = document.getElementById('selected-group');

const generateRandom = (e) => {
  e.preventDefault();
  const numGroups = parseInt(inputEl.value);

  const random = Math.ceil(Math.random() * numGroups);

  pEl.textContent = random;

  inputEl.value = '';
}

formEl.addEventListener('submit', generateRandom);