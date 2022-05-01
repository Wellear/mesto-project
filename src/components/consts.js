const profilePopup = document.querySelector("#popupProfile");
const elementsPopup = document.querySelector("#popupElements");
const imagePopup = document.querySelector("#imagePopup");
const elementsForm = elementsPopup.querySelector("#elementsForm");
const profileEditButton = document.querySelector(".profile__edit-button");
const elementsEditButton = document.querySelector(".profile__add-button");
const elementsImage = document.querySelector("elements__image");
const profileCloseButton = profilePopup.querySelector("#profileClose");
const elementsCloseButton = elementsPopup.querySelector("#elementsClose");
const imageCloseButton = imagePopup.querySelector("#imageClose");
const profileTitle = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__subtitle");
const profileForm = document.querySelector(".popup__form");
const nameInput = profilePopup.querySelector("#name");
const aboutInput = profilePopup.querySelector("#about");
const imageInPopup = imagePopup.querySelector(".popup__picture");
const imageTextInPopup = imagePopup.querySelector(".popup__text");
const elementsTemplate = document.querySelector("#elementsTemplate").content;
const elementsContainer = document.querySelector(".elements__list");
const cardTitle = document.querySelector("#imageTitle");
const cardLink = document.querySelector("#imageLink");
const popups = document.querySelectorAll(".popup");
const elementsAddButton = elementsPopup.querySelector("#addButton");
const deletePopup = document.querySelector("#deletePopup");
const deletePopupButton = document.querySelector("deletePopupButton");
const profileSaveButton = document.querySelector('#profileSaveButton');

const validationOptions = {
  formItem: ".popup__form",
  inputItem: ".popup__item",
  buttons: ".popup__button",
  inactiveButtons: "popup__button_inactive",
  inputErrorClass: "popup__item-error",
  errorClass: "popup__input-error",
};
const apiConfig = {
  apiUrl: "https://nomoreparties.co/v1/plus-cohort-9/",
  headers: {
    actualization: "3f443b98-feb1-41de-bdf1-464c3491594e",
    "Content-Type": "application/json"
  },
};
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ой, что-то пошло не так: ${res.status}`);
};
export {
  profilePopup,
  elementsPopup,
  imagePopup,
  elementsForm,
  profileEditButton,
  elementsEditButton,
  profileTitle,
  profileAbout,
  profileForm,
  nameInput,
  aboutInput,
  imageInPopup,
  imageTextInPopup,
  elementsTemplate,
  elementsContainer,
  cardLink,
  cardTitle,
  popups,
  validationOptions,
  apiConfig,
  checkResponse,
  elementsImage,
  profileCloseButton,
  elementsCloseButton,
  imageCloseButton,
  elementsAddButton,
  deletePopupButton,
  deletePopup,
  profileSaveButton
};
