const PubSub = require('../helpers/pub_sub.js')

const InputView = function () {

};

InputView.prototype.setupListener = function () {
  const inputForm = document.querySelector('#wordcounter-form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputtedString = event.target.text.value;
    console.log(inputtedString);

  });
};

module.exports = InputView;
