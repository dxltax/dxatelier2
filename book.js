// ======== CHAPTER VIEWER (Modal Slide) ========
const openChapterBtn = document.getElementById('openChapter');
const closeChapterBtn = document.getElementById('closeChapter');
const chapterModal = document.querySelector('.chapter-modal');

if (openChapterBtn && closeChapterBtn && chapterModal) {
  openChapterBtn.addEventListener('click', () => {
    chapterModal.classList.add('active');
  });

  closeChapterBtn.addEventListener('click', () => {
    chapterModal.classList.remove('active');
  });
}

// ======== HEART COUNTER (Per Chapter) ========
const heartBtn = document.getElementById('heartBtn');
const heartCount = document.getElementById('heartCount');
const chapterKey = document.body.dataset.chapter || 'chapter-1';

function updateHeart() {
  const savedHearts = parseInt(localStorage.getItem(`${chapterKey}-likes`)) || 0;
  heartCount.textContent = savedHearts;
}

if (heartBtn && heartCount) {
  updateHeart();

  heartBtn.addEventListener('click', () => {
    let current = parseInt(localStorage.getItem(`${chapterKey}-likes`)) || 0;
    current++;
    localStorage.setItem(`${chapterKey}-likes`, current);
    heartCount.textContent = current;
  });
}

// ======== COMMENT SYSTEM (LocalStorage based) ========
const commentInput = document.getElementById('commentInput');
const commentList = document.getElementById('commentList');
const commentBtn = document.getElementById('commentSubmit');

function loadComments() {
  const comments = JSON.parse(localStorage.getItem(`${chapterKey}-comments`) || '[]');
  commentList.innerHTML = comments.map(c => `<li>${c}</li>`).join('');
}

if (commentBtn && commentInput && commentList) {
  loadComments();

  commentBtn.addEventListener('click', () => {
    const value = commentInput.value.trim();
    if (value) {
      const comments = JSON.parse(localStorage.getItem(`${chapterKey}-comments`) || '[]');
      comments.push(value);
      localStorage.setItem(`${chapterKey}-comments`, JSON.stringify(comments));
      commentInput.value = '';
      loadComments();
    }
  });
}

// ======== MUSIC PLAYER TOGGLE ========
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');

if (music && musicBtn) {
  let isPlaying = false;

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      music.pause();
      musicBtn.textContent = 'Play Music';
    } else {
      music.play();
      musicBtn.textContent = 'Pause Music';
    }
    isPlaying = !isPlaying;
  });
}
