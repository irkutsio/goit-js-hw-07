import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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
`);
  instance.show();

  galleryList.addEventListener("keydown", onModalClose);
  function onModalClose(event) {
    console.log(event);
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
