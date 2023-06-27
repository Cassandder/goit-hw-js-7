import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

  function createGalleryMarkup(items) {
    return items.map(({ preview, original, description }) =>
      `<li class="gallery__item">
         <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
         </a>
       </li>`
    ).join('');
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
  });
});







 