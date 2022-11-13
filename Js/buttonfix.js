var bigH = '0';
for (let e of document.querySelectorAll('.btn')) {
  elH = e.offsetHeight;
  if (elH > bigW) {
    bigW = elH;
  }
  document.documentElement.style.setProperty("height", elH + 'px')
}