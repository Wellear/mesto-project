import { disableButton, clearForm } from "./utils";
import {
  profileTitle,
  profileAbout,
  nameInput,
  aboutInput,
  profileSaveButton,
  profilePopup,
  profileAvatar,
  avatarSaveButton,
  avatarLink,
  avatarForm,
} from "./consts";
import { updateProfileData, changeAvatar } from "./api";

function submitProfileForm(evt) {
  evt.preventDefault();
  profileSaveButton.textContent = "Сохранение...";
  profileTitle.textContent = "Загрузка...";
  profileAbout.textContent = "Подождите...";
  const data = {
    name: nameInput.value,
    about: aboutInput.value,
  };
  updateProfileData(data)
    .then((res) => {
      profileTitle.textContent = res.name;
      profileAbout.textContent = res.about;
      closePopup(profilePopup);
      disableButton(profileSaveButton);
    })
    .catch((err) => console.log(err))
    .finally(() => (profileSaveButton.textContent = "Сохранить"));
}

function updateProfile(avatar, name, about) {
  profileAvatar.src = avatar;
  profileTitle.textContent = name;
  profileAbout.textContent = about;
}
function submitProfileAvatar(evt) {
  evt.preventDefault();
  avatarSaveButton.textContent = "Сохранение...";
  changeAvatar(avatarLink.value)
    .then((res) => {
      profileAvatar.src = res.avatar;
      clearForm(avatarForm);
      closePopup(popupAvatar);
      disableButton(avatarSaveButton);
    })
    .catch((err) => console.log(err))
    .finally(() => (avatarSaveButton.textContent = "Сохранить"));
}

function closeEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openPopup(popupId) {
  popupId.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

function closePopup(popupId) {
  popupId.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
}
function fillProfileInputs() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}
export {
  openPopup,
  closePopup,
  updateProfile,
  submitProfileForm,
  closeEsc,
  submitProfileAvatar,
  fillProfileInputs,
};
