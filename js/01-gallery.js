import { galleryItems } from './gallery-items.js';

const arrayOfItems = [];

const gallery = document.querySelector('.gallery');

for (const item of galleryItems) {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');
  galleryItem.innerHTML = `
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`;
  arrayOfItems.push(galleryItem);
}

gallery.append(...arrayOfItems);

gallery.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();

  const source = event.target.dataset.source;

  const box = basicLightbox.create(
    `<img width="1400" height="900" class="boxx" src="${source}" tabindex="0">`
  );
  box.show();

  const specialFunc = function (event) {
//    console.log(event);
    if (event.key === 'Escape') {
      box.close();

      document
        .querySelector('body')
        .removeEventListener('keydown', specialFunc);
    }
  };

  document.querySelector('body').addEventListener('keydown', specialFunc);
});
