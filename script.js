const milk = document.getElementById('milk');
const sound = document.getElementById('milkSound');

nugget.addEventListener('click', () => {
  sound.currentTime = 0; // restart if already playing
  sound.play();
});

