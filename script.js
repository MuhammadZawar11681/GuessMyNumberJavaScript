'use strict';
// choosing random number by self
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;

// function to display messages
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// check number events on click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score !== 0) {
    // if there is no inputs
    if (!guess) {
      displayMessage('😢 No Number is Selected...');
    }
    // if input number is correct
    else if (guess === secretNumber) {
      displayMessage('🎉 Congraturation Correct Number......');
      // change the color
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score > heighScore) {
        heighScore = score;
        document.querySelector('.highscore').textContent = heighScore;
      }
    } else {
      displayMessage(
        guess > secretNumber ? '📈 Too High......' : '📉 Too Low......'
      );
      score--;
      document.querySelector('.score').textContent = score;
    }
    // if not choos correct number in turns
  } else {
    displayMessage('🤦‍♂️ You Lose the Game...');
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

// in this section we restore all pressing aging button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
