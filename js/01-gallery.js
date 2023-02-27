import { galleryItems } from './gallery-items.js';
// Change code below this line





console.log(galleryItems);

const list = document.querySelector('.gallery');

const newGallery = galleryItems
  .map(
    image => `<div class="gallery__item">
    <a class="gallery__link" href="${image.original}">
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </div>`
  )
  .join(``);


list.insertAdjacentHTML('beforeend', newGallery);



const increaseImage = (event) => {

    event.preventDefault();

        if (event.target.nodeName !== 'IMG') {
    		return}
        
        const selectedImage = event.target.getAttribute('data-source')
    
        const instance = basicLightbox.create(`
        <img src="${selectedImage}" width="800" height="600">`)
        instance.show()
    
        list.addEventListener("keydown", (event) => {
    
            if (event.key === 'Escape') {instance.close()}
        } )
    
    }


    list.addEventListener('click', increaseImage)
    
    



// list.addEventListener('click',  (event) => {
//     event.preventDefault();
//     if (event.target.nodeName !== 'IMG') {
// 		return}
    
//         const selectedImage = event.target.getAttribute('data-source')

//     const instance = basicLightbox.create(`
//     <img src="${selectedImage}" width="800" height="600">`)
//     instance.show()

//     list.addEventListener("keydown", (event) => {

//         if (event.key === 'Escape') {instance.close()}
//     } )

// })




