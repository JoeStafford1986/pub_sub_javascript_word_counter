const PubSub = require('../helpers/pub_sub.js')

const WordCounter = function () {

};

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:string-inputted', (event) => {
    const inputtedString = event.detail;
    const result = this.countWords(inputtedString);
    console.log(result);
    PubSub.publish('WordCounter:result', result);
  });
};

WordCounter.prototype.countWords = function (string) {
  const arrayOfWords = string.split(' ');
  return arrayOfWords.length;
};

module.exports = WordCounter;
