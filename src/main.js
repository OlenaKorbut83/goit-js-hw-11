import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImage } from './js/pixabay-api.js';
import { addImages, imageGalleryLightbox } from './js/render-functions.js';

const form = document.querySelector('.image-search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loading-indicator');

form.addEventListener('submit', event => {
  event.preventDefault();

  gallery.innerHTML = '';

  const inputSearch = event.target.elements.inputSearch.value.trim();

  if (!inputSearch) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter your query.',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  searchImage(inputSearch)
    .then(data => {
      if (!data.hits.length) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: '#FAFAFB',
          color: '#EF4040',
          position: 'topRight',
        });
        hideLoader();
      } else {
        addImages(data.hits);
        imageGalleryLightbox();
        hideLoader();
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    });
  form.reset();
});

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
