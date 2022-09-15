// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const galleryItemsList = document.querySelector('.gallery');

const markUp = onCreatePicture(galleryItems);

galleryItemsList.insertAdjacentHTML('beforeend', markUp);
function onCreatePicture(items) {
    return items.map(item => {
        return `
       <div class="gallery__item">
  <a class="gallery__link" href="${item.preview}"
  data-lightbox = "lbox">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`}).join('')
}

galleryItemsList.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}
    const selectedImage = e.target.getAttribute('data-source')
    const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`)
    instance.show()
        galleryItemsList.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
})

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});