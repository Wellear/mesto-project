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
export { openPopup, closePopup };
