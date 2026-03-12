import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import axios from 'axios';

const form = document.querySelector('.form');
const input = document.getElementsByName('search-text');

form.addEventListener('submit', e => {
  e.preventDefault();
  const query = input.values.trim();

  if (query === '') {
    alert('Помилка: рядок пошуку не може бути порожнім!');
  } else {
    console.log('Виконується запит для:', query);
  }
});
