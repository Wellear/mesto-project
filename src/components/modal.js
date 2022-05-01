
import { disableButton } from "./utils";
import {
  profileTitle,
  profileAbout,
  nameInput,
  aboutInput,
  profileSaveButton,
  profilePopup,
} from "./consts";
function submitProfileForm(evt) {
  evt.preventDefault()
  profileSaveButton.textContent = 'Сохранение...'
  profileTitle.textContent = 'Загрузка...';
  profileAbout.textContent = 'Подождите...';
  const data = {
    name: nameInput.value,
    about: aboutInput.value
  }
  updateProfileData(data)
    .then(res => {
      profileTitle.textContent = res.name;
      profileAbout.textContent = res.about;
      closePopup(profilePopup)
      disableButton(profileSaveButton)
    })
    .catch(err => console.log(err))
    .finally(() => profileSaveButton.textContent = 'Сохранить')
}

function updateProfile (name, about) {
  profileTitle.textContent = name
  profileAbout.textContent = about
}

function fillProfileInputs() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}

function openPopup(popupId) {
  popupId.classList.add("popup_opened");
}

function closePopup(popupId) {
  popupId.classList.remove("popup_opened");
}
document.addEventListener("click", (e) => {
  if (e.target === profilePopup) {
    profilePopup.classList.remove("popup_opened");
  }
});
document.addEventListener("click", (e) => {
  if (e.target === elementsPopup) {
    elementsPopup.classList.remove("popup_opened");
  }
});
document.addEventListener("click", (e) => {
  if (e.target === imagePopup) {
    imagePopup.classList.remove("popup_opened");
  }
});
document.addEventListener("click", (e) => {
  if (e.key === imagePopup) {
    imagePopup.classList.remove("popup_opened");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    imagePopup.classList.remove("popup_opened");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    elementsPopup.classList.remove("popup_opened");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    profilePopup.classList.remove("popup_opened");
  }
});
export { openPopup, closePopup,fillProfileInputs, updateProfile, submitProfileForm  };
