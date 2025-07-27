// ======== MODE SWITCHER ========
const modeToggle = document.getElementById('modeToggle');
const currentMode = localStorage.getItem('mode') || 'light';
document.body.classList.remove('light', 'dark');
document.body.classList.add(currentMode);
modeToggle.textContent = currentMode === 'dark' ? '☀️' : '🌙';

modeToggle.addEventListener('click', () => {
  const newMode = document.body.classList.contains('dark') ? 'light' : 'dark';
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(newMode);
  localStorage.setItem('mode', newMode);
  modeToggle.textContent = newMode === 'dark' ? '☀️' : '🌙';
});

// ======== FILTER CATEGORY ========
const filterButtons = document.querySelectorAll('.filters button');
const bookCards = document.querySelectorAll('.book-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    bookCards.forEach(card => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(filter) ? 'block' : 'none';
      }
    });

    // Optional: highlight selected filter
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ======== DYNAMIC BACKGROUND (Mood) ========
function setMoodBackground() {
  const mood = document.body.dataset.mood;
  if (!mood) return;

  // Customize background per mood
  if (mood === 'sad') {
    document.body.style.background = 'linear-gradient(to bottom, #0f0f1b, #1a1a2f)';
  } else if (mood === 'hope') {
    document.body.style.background = 'linear-gradient(to top, #fceabb, #f8b500)';
  } else {
    document.body.style.background = '';
  }
}
setMoodBackground();
