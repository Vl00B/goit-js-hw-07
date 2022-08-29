import { galleryItems } from './gallery-items.js';

const arrayOfItems = [];

const gallery = document.querySelector('.gallery');

for (const item of galleryItems) {
  const galleryItem = document.createElement('a');
  galleryItem.classList.add('gallery__item');
  galleryItem.setAttribute('href', item.original);
  galleryItem.innerHTML = `
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  `;
  arrayOfItems.push(galleryItem);
}

gallery.append(...arrayOfItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});

// for (let i = 1; i <= gallery.children.length; i++) {
//   const currentItem = document.querySelector(
//     `.gallery__item:nth-of-type(${i})`
//   );

//   currentItem.addEventListener('click', linkEvent);
// }

// function linkEvent(event) {
//   event.preventDefault();
// }
