// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні. 
// Подивися демо відео роботи галереї.
// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. 
// Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. 
// Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.

// як це робити
// перебрати масив з об'єктами та для кожного з них зробити розмітку, а потім масив розміток додати до галереї ++++++++++++++++++
// повісити слухач кліку не на кожний елемент а на всю галерею+++++++++++++++++
// отримати url елементу на якому відбувся клік+++++++++++++++++++++++++++++++++
// додати бібліотеку ++++++++++=
// додати модальне вікно +++++++++==
console.log("Я боюся братися за це завдання, але я від цього нікуди не дінуся");


import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
// console.log(galleryRef);
const listImage = galleryItems.map(item => `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('')
// console.log(listImage);
galleryRef.insertAdjacentHTML("beforeend", listImage);
// console.log(galleryRef);
let getUrl
galleryRef.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Клік');
    console.log(event.target.dataset.source);
    getUrl=event.target.dataset.source;
   
    console.log(modalImage.element().querySelector('img').src)
    modalImage.element().querySelector('img').src = getUrl;
    console.log(modalImage.element().querySelector('img'));
    modalImage.element().querySelector('img').alt = event.target.alt
    console.log(event.target.getAttribute('alt'));
    console.log(event.target.alt);
    modalImage.show();
});
const modalImage = basicLightbox.create(
    `<img src="" alt="">`,
    {
        onShow: () => window.addEventListener('keydown', closeModal),
        onClose: () => window.removeEventListener('keydown', closeModal)
    }

)
function closeModal(event) {
    if (event.key === 'Escape') {
        modalImage.close()
    }
}

https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
{/* <script src="https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"></script> */}
{/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */}