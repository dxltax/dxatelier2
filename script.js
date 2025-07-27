function copyQuote() {
  const quote = document.querySelector(".quote-section blockquote").innerText;
  navigator.clipboard.writeText(quote).then(() => {
    alert("Quote copied!");
  });
}

function openChapter(id) {
  alert("Coming soon: Chapter " + id);
}
