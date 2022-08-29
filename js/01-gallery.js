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

for (let i = 1; i <= gallery.children.length; i += 1) {
  const galleryLink = document.querySelector(
    `.gallery__item:nth-of-type(${i}) .gallery__link`
  );

  const source = galleryLink.getAttribute('href');

  const box = basicLightbox.create(
    `<img width="1400" height="900" src="${source}">`
  );

  galleryLink.addEventListener('click', (event) => {
    event.preventDefault();
    box.show();
  });
}
