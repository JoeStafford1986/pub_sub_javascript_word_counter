const PubSub = require('../helpers/pub_sub.js')

const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const inputForm = document.querySelector('#wordcounter-form');
  inputForm.addEventListener('submit', (event) => {
    const inputtedString = event.target.text.value;
    console.log(inputtedString);
    PubSub.publish('InputView:string-inputted', inputtedString);
    event.preventDefault();
  });
};

module.exports = InputView;
