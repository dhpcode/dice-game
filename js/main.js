
//buttons
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//dice image
const diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';

let currentScore = 0;

btnRoll.addEventListener('click', () => {
  diceImg.style.display = 'block';

  const randomNumber = Math.floor(Math.random() * 6 + 1);
  diceImg.src = `./dice-${randomNumber}.png`;

  currentScore += randomNumber;
  document.getElementById('current--0').textContent =  currentScore;
})