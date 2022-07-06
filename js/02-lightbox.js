// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, 
// яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна,
// а також гортання зображень за допомогою клавіатури.
// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
// Використовуй готовий код з першого завдання.+++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. 
// Необхідно додати посилання на два файли: simple - lightbox.min.js і simple - lightbox.min.css.+++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. 
// Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
// Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.

console.log("Борітеся - поборете!");


import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);

const listImage = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__item" href=${item.original}>
    <img
      class="gallery__image"
      src="${item.preview}"      
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</div>`).join('');
// console.log(listImage);
galleryRef.insertAdjacentHTML("beforeend", listImage);
// console.log(galleryRef);
galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('Клік');
});
let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250});