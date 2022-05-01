import "../pages/index.css";
import { addCard, newCard, submitCardForm, deleteCardAccept,} from "./card";
import { openPopup, closePopup } from "./modal";
import { enableValidation } from "./validate";
import {
  profilePopup,
  elementsPopup,
  profileEditButton,
  elementsEditButton,
  profileForm,
  validationOptions,
  popups,
} from "./consts";
import { getProfileData, getCadrsData } from "./api";



Promise.all([getCadrsData(), getProfileData()])
  .then(([cards, userData]) => {
    cards.forEach((card) => {
      newCard(addCard(card, userData));
    });
    updateProfile(userData.avatar, userData.name, userData.about);
    user = userData;
  })
  .catch((err) => console.log(err));
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});
deletePopupButton.addEventListener("click", deleteCardAccept);

profileEditButton.addEventListener("click", function () {
  openPopup(profilePopup);
});

elementsEditButton.addEventListener("click", function () {
  openPopup(elementsPopup);
});
profileForm.addEventListener("submit", submitProfileForm);
elementsPopup.addEventListener("submit", submitCardForm);

enableValidation(validationOptions);
export let user;

