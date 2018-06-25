const InputView = require('./views/input_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript has loaded');

  const inputView = new InputView();
  inputView.setupListener();
});
