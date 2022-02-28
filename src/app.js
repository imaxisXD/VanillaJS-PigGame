`use strict`;
rollBtn = document.querySelector('.btn--roll');
holdBtn = document.querySelector('.btn--hold');
diceImg = document.querySelector('.dice');
currentScorePlayer1 = document.querySelector('#current--0');
currentScorePlayer2 = document.querySelector('#current--1');
mainScorePlayer1 = document.querySelector('#score--0');
mainScorePlayer2 = document.querySelector('#score--1');
secP1 = document.querySelector('.player--0');
secP2 = document.querySelector('.player--1');

const activePlayer = () => {
  if (secP1.classList.contains('player--active'))
    return [currentScorePlayer1, mainScorePlayer1];
  return [currentScorePlayer2, mainScorePlayer2];
};
const displayMainScore = (playerScore, mainScoreBoard) => {
  mainScoreBoard.textContent = Number(playerScore.textContent);
};
const displayCurrScore = (playerScore, diceValue) => {
  if (diceValue == 1) {
    playerScore.textContent = Number(0);
  } else {
    playerScore.textContent = Number(playerScore.textContent) + diceValue;
  }
};

const switchPlayer = currPlayer => {
  if (secP1.classList.contains('player--active')) {
    secP1.classList.remove('player--active');
    secP2.classList.add('player--active');
    currPlayer = currentScorePlayer1;
  } else {
    secP2.classList.remove('player--active');
    secP1.classList.add('player--active');
    currPlayer = currentScorePlayer2;
  }
};

const randomDice = () => {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  diceImg.src = `./resources/img/dice-${diceValue}.png`;
  let [currPlayerScore, currPlayerMainScore] = activePlayer();
  if (diceValue === 1) {
    displayCurrScore(currPlayerScore, 1);
    switchPlayer(currPlayerScore);
  } else {
    displayCurrScore(currPlayerScore, diceValue);
  }
};

const holdScore = () => {
  let [currPlayerScore, currPlayerMainScore] = activePlayer();
  displayMainScore(currPlayerScore, currPlayerMainScore);
  switchPlayer(currPlayerScore);
};

rollBtn.addEventListener('click', randomDice);
holdBtn.addEventListener('click', holdScore);
