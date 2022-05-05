
const profilePopup = document.querySelector("#popupProfile");
const elementsPopup = document.querySelector("#popupElements");
const imagePopup = document.querySelector("#imagePopup");
const elementsForm = elementsPopup.querySelector("#elementsForm");
const profileEditButton = document.querySelector(".profile__edit-button");
const elementsEditButton = document.querySelector(".profile__add-button");
const profileCloseButton = profilePopup.querySelector('#profileClose');
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
const elementsCloseButton = elementsPopup.querySelector("#elementsClose")

const validationOptions = {
  formItem: ".popup__form",
  inputItem: ".popup__item",
  buttons: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__item-error",
  errorClass: "popup__input-error",
};
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
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
  validationOptions,
  imageCloseButton,
  initialCards,
  profileCloseButton,
  elementsCloseButton
};
