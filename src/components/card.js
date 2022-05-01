import { postNewCard, deleteCard, addLike, removeLike } from "./api";
import { user } from "./index";
import {
  elementsPopup,
  imagePopup,
  elementsForm,
  imageInPopup,
  imageTextInPopup,
  elementsTemplate,
  elementsContainer,
  cardTitle,
  cardLink,
  elementsAddButton,
  deletePopup,
} from "./consts";
import { openPopup, closePopup } from "./modal";
import {clearForm,disableButton} from "./utils";

function newCard(item) {
  elementsContainer.prepend(item);
}

function addCard(cardData, userData) {
  const elementsElement = elementsTemplate.cloneNode(true);
  const elementsImage = elementsElement.querySelector("#elementsImage");
  const elementsDeleteButton = elementsElement.querySelector(
    ".elements__delete-button"
  );
  const elementsItem = elementsElement.querySelector(".elements__item");
  const likeCounter = elementsElement.querySelector(".elements__like-counter");
  const elementsLike = elementsElement.querySelector(".elements__like");

  elementsElement.querySelector("#elementsTitle").textContent = cardData.name;
  elementsImage.setAttribute("src", cardData.link);
  elementsImage.setAttribute("alt", cardData.name);
  elementsItem.setAttribute("data-id", cardData._id);

  checkCardOwner(cardData, userData, elementsDeleteButton);
  if (cardData.likes.length > 0)
    likeCounter.textContent = cardData.likes.length;
  if (cardData.likes.some((element) => element._id === userData._id))
    elementsLike.classList.add("elements__like_active");
  elementsLike.addEventListener("click", (evt) =>
    likeSwitch(evt, cardData, likeCounter)
  );
  elementsElement
    .querySelector("#deleteButton")
    .addEventListener("click", requestsDeleteCard);

  function handleCardClick() {
    openPopup(imagePopup);
    imageInPopup.src = cardData.link;
    imageInPopup.alt = cardData.name;
    imageTextInPopup.textContent = cardData.name;
  }
  elementsImage.addEventListener("click", handleCardClick);
  return elementsElement;
}

function likeToggle(evt) {
  evt.target.classList.toggle("elements__like_active");
}

function removeCard(evt) {
  evt.target.closest("#elementsItem").remove();
}

function checkCardOwner(cardData, userData, elementsDeleteButton) {
  if (cardData.owner._id !== userData._id) {
    elementsDeleteButton.classList.add("elements__delete-button_hidden");
  }
}

function submitCardForm(evt) {
  evt.preventDefault();
  elementsAddButton.textContent = "Подождите...";
  const cardData = {
    name: cardTitle.value,
    link: cardLink.value,
  };
  postNewCard(cardData)
    .then((res) => {
      elementsContainer.prepend(addCard(res, user));
      clearForm(elementsForm);
      closePopup(elementsPopup);
      disableButton(elementsAddButton);
    })
    .catch((err) => console.log(err))
    .finally(() => (elementsAddButton.textContent = "Добавить"));
}

function requestsDeleteCard(evt) {
  openPopup(deletePopup);
  const card = evt.target.closest(".elements__item");
  const id = card.getAttribute("data-id");
  deletePopup.setAttribute("data-id", id);
}

function deleteCardAccept() {
  const id = deletePopup.getAttribute("data-id");
  const card = document.querySelector(`[data-id='${id}']`);
  deleteCard(id)
    .then(() => {
      card.remove();
      closePopup(deletePopup);
    })
    .catch((err) => console.log(err));
}

function likeSwitch(evt, cardData, likeCounter) {
  const id = cardData._id;
  const activeClass = "elements__like_active";

  if (evt.target.classList.contains(activeClass)) {
    removeLike(id)
      .then((res) => {
        likeToggle(evt);
        if (res.likes.length > 0) likeCounter.textContent = res.likes.length;
        else likeCounter.textContent = "0";
      })
      .catch((err) => console.log(err));
  } else {
    addLike(id)
      .then((res) => {
        likeCounter.textContent = res.likes.length;
        likeToggle(evt);
      })
      .catch((err) => console.log(err));
  }
}
export {
  newCard,
  addCard,
  likeToggle,
  likeSwitch,
  removeCard,
  checkCardOwner,
  submitCardForm,
  requestsDeleteCard,
  deleteCardAccept,
};
