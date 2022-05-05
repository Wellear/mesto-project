import "../pages/index.css";
import { createCard, newCard, submitCardForm, deleteCardAccept } from "./card";
import {
  openPopup,
  closePopup,
  updateProfile,
  submitProfileForm,
  submitProfileAvatar,
} from "./modal";
import { enableValidation } from "./validate";
import {
  profilePopup,
  elementsPopup,
  profileEditButton,
  elementsEditButton,
  profileForm,
  validationOptions,
  popups,
  profileAvatarButton,
  avatarPopup,
  avatarForm,
} from "./consts";
import { getProfileData, getCadrsData } from "./api";

Promise.all([getCadrsData(), getProfileData()])
  .then(([cards, userData]) => {
    cards.forEach((card) => {
      newCard(createCard(card, userData));
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
profileAvatarButton.addEventListener("click", function () {
  openPopup(avatarPopup);
});
elementsEditButton.addEventListener("click", function () {
  openPopup(elementsPopup);
});
avatarForm.addEventListener("submit", submitProfileAvatar);
profileForm.addEventListener("submit", submitProfileForm);
elementsPopup.addEventListener("submit", submitCardForm);

enableValidation(validationOptions);
export let user;
