 function closeEsc(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup)
  }
};
function closeOverlayClick(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup')) {
    closePopup(openedPopup)
  }
}
 function openPopup(popupId) {
  popupId.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc);
  document.addEventListener('mousedown', closeOverlayClick)
};


 function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
  document.removeEventListener('mousedown', closeOverlayClick)
};
export{
  closeOverlayClick,
  openPopup,
  closePopup,
  closeEsc
}