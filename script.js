// Generador de copos de nieve flotantes
function createSnow() {
  const container = document.getElementById('snow');
  const flakes = ['❄', '❅', '❆', '•'];
  
  for (let i = 0; i < 35; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerText = flakes[Math.floor(Math.random() * flakes.length)];
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.animationDuration = (Math.random() * 3 + 4) + 's';
    flake.style.opacity = Math.random();
    flake.style.
