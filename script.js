function filterBooks(category) {
  document.querySelectorAll('.filter').forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.filter[onclick="filterBooks('${category}')"]`).classList.add('active');

  const cards = document.querySelectorAll('.book-card');
  cards.forEach(card => {
    const status = card.getAttribute('data-status');
    if (category === 'all' || status === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
