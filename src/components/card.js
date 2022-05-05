
import {
  imagePopup, imageInPopup, 
  imageTextInPopup, elementsTemplate,
  elementsContainer,
  initialCards
} from "./consts";
import { openPopup} from "./modal";

function createCard(name, link) {
  const elementsElement = elementsTemplate.cloneNode(true);
  const elementsImage = elementsElement.querySelector('#elementsImage');
  elementsElement.querySelector('#elementsTitle').textContent = name;
  elementsImage.setAttribute('src', link);
  elementsImage.setAttribute('alt', name);

  elementsElement.querySelector('.elements__like').addEventListener('click', likeCard)
  elementsElement.querySelector('#deleteButton').addEventListener('click', removeCard)

    function addImageToPopup() {
      openPopup(imagePopup);
      imageInPopup.src = link;
      imageInPopup.alt = name;
      imageTextInPopup.textContent = name;
    }
    elementsImage.addEventListener('click', addImageToPopup);
    return elementsElement;
  }
  function likeCard(evt) {
    evt.target.classList.toggle('elements__like_active');
  }
  function removeCard(evt) {
    evt.target.closest('#elementsItem').remove();
  }
  initialCards.forEach(function (item) { elementsContainer.prepend(createCard(item.name, item.link)) });
export {
  createCard,
  likeCard,
  removeCard
};
