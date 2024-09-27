document.addEventListener('DOMContentLoaded', () => {
  createConfetti();
  createBalloons(20); // Задайте тут кількість кульок
});

function createConfetti() { // створення конфеті
  const confettiContainer = document.getElementById('confetti-container');
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.backgroundColor = getRandomColor();
    confettiContainer.appendChild(confetti);
  }
}

function getRandomColor() { // рандомазер кольорів
  const colors = ['#f0a696', '#8ce6e2', '#e68ca0', '#bbabcc', '#abccad'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBalloons(count) {// створення кульок
  const balloonContainer = document.getElementById('balloon-container');
  balloonContainer.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const balloonWrapper = document.createElement('div');
    balloonWrapper.classList.add('balloon-container');

    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.backgroundColor = getRandomColor();

    const balloonString = document.createElement('div');
    balloonString.classList.add('string');

    balloonWrapper.appendChild(balloon);
    balloonWrapper.appendChild(balloonString);

    // Встановлюємо випадкову позицію кульки на сторінці
    balloonWrapper.style.top = Math.random() * 100 + 'vh'; // Випадкова позиція по вертикалі
    balloonWrapper.style.left = Math.random() * 100 + 'vw'; // Випадкова позиція по горизонталі
    balloonWrapper.style.transform = 'translate(-50%, -50%)'; // Центрування кульки

    balloonContainer.appendChild(balloonWrapper);
  }
}
