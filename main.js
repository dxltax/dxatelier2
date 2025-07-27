// ========== MODE SWITCHER ==========
const modeToggle = document.getElementById('modeToggle');
const savedMode = localStorage.getItem('mode') || 'light';
setMode(savedMode);

modeToggle.addEventListener('click', () => {
  const newMode = document.body.classList.contains('dark') ? 'light' : 'dark';
  setMode(newMode);
});

function setMode(mode) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(mode);
  localStorage.setItem('mode', mode);
  modeToggle.textContent = mode === 'dark' ? '☀️' : '🌙';
}

// ========== FILTER CATEGORY ==========
const filterButtons = document.querySelectorAll('.filters button');
const bookCards = document.querySelectorAll('.book-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    bookCards.forEach(card => {
      const match = filter === 'all' || card.classList.contains(filter);
      card.style.display = match ? 'block' : 'none';
    });

    // Update active button style
    filterButtons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
});

// ========== DYNAMIC MOOD BACKGROUND ==========
function setMoodBackground() {
  const mood = document.body.dataset.mood;
  if (!mood) return;

  switch (mood) {
    case 'sad':
      document.body.style.background = 'linear-gradient(to bottom, #0f0f1b, #1a1a2f)';
      break;
    case 'hope':
      document.body.style.background = 'linear-gradient(to top, #fceabb, #f8b500)';
      break;
    default:
      document.body.style.background = '';
  }
}
setMoodBackground();

// ========== CHAPTER VIEWER (from external file) ==========
function openChapter(chapterFile) {
  fetch(`chapters/${chapterFile}`)
    .then(response => response.text())
    .then(html => {
      document.getElementById('chapterContent').innerHTML = html;
      document.getElementById('chapterViewer').classList.add('active');
    })
    .catch(err => {
      document.getElementById('chapterContent').innerHTML = `<p>Error loading chapter.</p>`;
      document.getElementById('chapterViewer').classList.add('active');
    });
}

function closeChapter() {
  document.getElementById('chapterViewer').classList.remove('active');
}
