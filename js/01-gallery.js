import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  ).join('');
}

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  console.log(event)
    event.preventDefault();
    const target = event.target;

    if (target.classList.contains('gallery__image')) {
      const source = target.dataset.source;
      console.log(source)
      openModal(source);
    }
}

function openModal(source) {
  const instance = basicLightbox.create(`<img src="${source}" alt="" />`);
  instance.show();
}