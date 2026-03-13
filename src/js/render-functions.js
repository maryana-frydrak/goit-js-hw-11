import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});

export function createGallery(images) {
  const galleryUl = document.querySelector('.gallery');

  const markup = images
    .map(image => {
      return;
      ` <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        </a>
        <div class="info">
        <p><b>Likes:</b>${image.likes}</p>
        <p><b>Views:</b>${image.views}</p>
        <p><b>Comments:</b>${image.comments}</p>
        <p><b>Downloads:</b>${image.downloads}</p>
        </div>
      </li>`;
    })
    .join('');

  galleryUl.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  const galleryUl = document.querySelector('.gallery');
  galleryUl.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('is-hidden');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('is-hidden');
  }
}
