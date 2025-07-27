const modeToggle = document.getElementById('modeToggle');
const body = document.body;
const tabs = document.querySelectorAll('.tab');
const books = document.querySelectorAll('.book-card');

// Load saved mode
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  modeToggle.textContent = '🌞';
}

// Toggle mode
modeToggle.addEventListener('click', () => {
  body.classList.toggle('light');
  const mode = body.classList.contains('light') ? 'light' : 'dark';
  localStorage.setItem('theme', mode);
  modeToggle.textContent = mode === 'light' ? '🌞' : '🌙';
});

// Filter tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const filter = tab.dataset.filter;
    books.forEach(book => {
      if (book.classList.contains(filter)) {
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });
});
