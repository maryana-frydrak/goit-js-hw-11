let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

export function createGallery(images) {
  const galleryUl = document.querySelector('.gallery');

  const markup = images.map(image => ``);
}
