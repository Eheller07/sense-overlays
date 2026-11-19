function fitPublicationToViewport() {
  const width = document.documentElement.clientWidth;
  document.documentElement.style.setProperty('--publication-scale', Math.min(1, width / 1024));
}

fitPublicationToViewport();
window.addEventListener('resize', fitPublicationToViewport);
