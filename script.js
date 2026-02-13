const cursor = document.querySelector('.custom-cursor');
const line = document.querySelector('.cursor-line');
const body = document.body;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let prevX = mouseX;
let prevY = mouseY;
let angle = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Calcul de l'angle de la direction du mouvement
  const dx = mouseX - prevX;
  const dy = mouseY - prevY;
  
  if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
    angle = Math.atan2(dy, dx) * (180 / Math.PI);
    // Lissage léger de l'angle pour éviter les sauts brusques
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }

  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';

  prevX = mouseX;
  prevY = mouseY;
});

// Gestion hover
document.querySelectorAll('.hover-target, a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    body.classList.add('hover');
  });
  
  el.addEventListener('mouseleave', () => {
    body.classList.remove('hover');
  });
});

// Centrage initial
cursor.style.left = mouseX + 'px';
cursor.style.top  = mouseY + 'px';
