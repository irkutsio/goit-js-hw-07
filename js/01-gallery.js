import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join(" ");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

galleryList.addEventListener("click", onModalOpen);
function onModalOpen(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`, {
  onShow: (instance) => {
    document.addEventListener("keydown", onModalClose)
  },
  onclose: (instance) => {
  document.removeEventListener("keydown", onModalClose)
}

});

instance.show();
  
 function onModalClose(event) {
    console.log(event);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}


