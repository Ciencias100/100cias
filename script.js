// Reproductor de música
let isPlaying = false;
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    musicBtn.innerHTML = '🎵 Música: OFF';
    musicBtn.style.background = '#d4af37';
  } else {
    audio.play();
    musicBtn.innerHTML = '🎶 Música: ON';
    musicBtn.style.background = '#155d3b';
    musicBtn.style.color = '#ffffff';
  }
  isPlaying = !isPlaying;
}

// Intentar reproducir automáticamente al primer clic en cualquier parte de la pantalla
document.body.addEventListener('click', function() {
  if (!isPlaying && audio.paused) {
    audio.play().then(() => {
      isPlaying = true;
      musicBtn.innerHTML = '🎶 Música: ON';
      musicBtn.style.background = '#155d3b';
      musicBtn.style.color = '#ffffff';
    }).catch(() => {
      // Autoplay bloqueado por el navegador hasta interacción explícita
    });
  }
}, { once: true });

// Generador de copos de nieve
function createSnow() {
  const container = document.getElementById('snow');
  const flakes = ['❄', '❅', '❆', '•'];
  
  for (let i = 0; i < 40; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.innerText = flakes[Math.floor(Math.random() * flakes.length)];
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.animationDuration = (Math.random() * 3 + 4) + 's';
    flake.style.opacity = Math.random();
    flake.style.fontSize = (Math.random() * 12 + 10) + 'px';
    container.appendChild(flake);
  }
}

// Copiar CLABE al portapapeles
function copyClabe() {
  const clabe = "012320026413859419";
  navigator.clipboard.writeText(clabe).then(() => {
    const btn = document.getElementById("btn-copy");
    btn.innerText = "¡Copiada! ✓";
    btn.style.background = "#155d3b";
    btn.style.color = "#ffffff";
    setTimeout(() => {
      btn.innerText = "Copiar CLABE 📋";
      btn.style.background = "#d4af37";
      btn.style.color = "#0b3c26";
    }, 2000);
  });
}

document.addEventListener("DOMContentLoaded", createSnow);
