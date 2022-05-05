import "../pages/index.css";
import { createCard } from "./card";
import { openPopup, closePopup } from "./modal";
import { enableValidation } from "./validate";
import {
  profilePopup,
  elementsPopup,
  profileEditButton,
  elementsEditButton,
  profileForm,
  validationOptions,
  imagePopup,
  elementsForm,
  profileCloseButton,
  elementsCloseButton,
  imageCloseButton,
  elementsContainer,
  cardTitle,
  cardLink,
} from "./consts";
import { submitProfileForm, actualizationForm, clearForm } from "./utils";

profileEditButton.addEventListener("click", function () {
  actualizationForm();
  openPopup(profilePopup);
});
profileCloseButton.addEventListener("click", function () {
  closePopup(profilePopup);
});
elementsEditButton.addEventListener("click", function () {
  openPopup(elementsPopup);
});

elementsCloseButton.addEventListener("click", function () {
  clearForm(elementsForm);
  closePopup(elementsPopup);
});

profileForm.addEventListener("submit", submitProfileForm);

profileForm.addEventListener("submit", function () {
  closePopup(popupProfile);
});

imageCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
});

elementsPopup.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elementsContainer.prepend(createCard(cardTitle.value, cardLink.value));

  clearForm(elementsForm);

  closePopup(elementsPopup);
});

enableValidation(validationOptions);
export let user;
