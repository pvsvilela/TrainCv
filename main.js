const boardBtn = document.querySelector('[data-board]');
const sections = Array.from(document.querySelectorAll('[data-station]'));
const links = Array.from(document.querySelectorAll('[data-station-link]'));
const progressFill = document.querySelector('.progress-fill');
const soundToggle = document.getElementById('soundToggle');
const ambientAudio = document.getElementById('ambientAudio');

if (boardBtn) {
  boardBtn.addEventListener('click', () => {
    const nextCar = document.getElementById('locomotive');
    if (nextCar) {
      nextCar.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function updateProgress() {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  let currentIndex = 0;

  sections.forEach((section, index) => {
    if (scrollPos >= section.offsetTop) {
      currentIndex = index;
    }
  });

  const progressPercent = currentIndex / (sections.length - 1);
  progressFill.style.width = `${progressPercent * 100}%`;

  const activeId = sections[currentIndex].id;
  links.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', isActive);
  });
}

updateProgress();
window.addEventListener('scroll', updateProgress);
window.addEventListener('resize', updateProgress);

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

function setDialNeedles() {
  document.querySelectorAll('.dial').forEach((dial) => {
    const value = Number(dial.dataset.value || 0);
    const needle = document.createElement('span');
    needle.className = 'needle';
    dial.appendChild(needle);
    const degrees = (value / 100) * 180 - 90;
    needle.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`;
  });
}

setDialNeedles();

soundToggle.addEventListener('click', () => {
  const isPlaying = soundToggle.getAttribute('aria-pressed') === 'true';
  if (isPlaying) {
    ambientAudio.pause();
    soundToggle.textContent = 'Sound off';
  } else {
    ambientAudio.play();
    soundToggle.textContent = 'Sound on';
  }
  soundToggle.setAttribute('aria-pressed', (!isPlaying).toString());
});

ambientAudio.volume = 0.35;
