
const profilePopup = document.querySelector('#popupProfile');
const elementsPopup = document.querySelector('#popupelements');
const imagePopup = document.querySelector('#imagePopup');
const elementsForm = elementsPopup.querySelector('#elementsForm')
const profileEditButton = document.querySelector('.profile__edit-button');
const elementsEditButton = document.querySelector('.profile__add-button');
const elementsImage = document.querySelector('elements__image');
const profileCloseButton = profilePopup.querySelector('#profileClose');
const elementsCloseButton = elementsPopup.querySelector('#elementsClose');
const imageCloseButton = imagePopup.querySelector('#imageClose');
const profileTitle = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const profileForm = document.querySelector('.popup__form');
const nameInput = profilePopup.querySelector('#name');
const aboutInput = profilePopup.querySelector('#about');
const imageInPopup = imagePopup.querySelector('.popup__picture');
const imageTextInPopup = imagePopup.querySelector('.popup__text');
const elementsTemplate = document.querySelector('#elementsTemplate').content;
const elementsContainer = document.querySelector('.elements__list');
const cardTitle = document.querySelector('#imageTitle');
const cardLink = document.querySelector('#imageLink');
const initialCards = [{
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

function openPopup(popupId) {
  popupId.classList.add('popup_opened');
};

function closePopup(popupId) {
  popupId.classList.remove('popup_opened');
};

function submitFormHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;
}

function actualizationForm() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileAbout.textContent;
}

function clearForm(formId) {
  formId.reset();
}


function addCard(name, link) {
  const elementsElement = elementsTemplate.cloneNode(true);
  const elementsImage = elementsElement.querySelector('#elementsImage');
  elementsElement.querySelector('#elementsTitle').textContent = name;
  elementsImage.setAttribute('src', link);
  elementsImage.setAttribute('alt', name);

  elementsElement.querySelector('.elements__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
  })
  elementsElement.querySelector('#delButton').addEventListener('click', function (evt) {
    evt.target.closest('#elementsItem').remove();
  })

  function addImageToPopup() {
    openPopup(imagePopup);

    imageInPopup.src = link;
    imageInPopup.alt = name;
    imageTextInPopup.textContent = name;
  }
  elementsImage.addEventListener('click', addImageToPopup);
  return elementsElement;
}
elementsPopup.addEventListener('submit', function (evt) {
  evt.preventDefault();
  elementsContainer.prepend(addCard(cardTitle.value, cardLink.value));

  clearForm(elementsForm)

  closePopup(elementsPopup)
})

profileEditButton.addEventListener('click', function () {
  actualizationForm();
  openPopup(profilePopup);
});
profileCloseButton.addEventListener('click', function () {
  closePopup(profilePopup)
});
elementsEditButton.addEventListener('click', function () {
  openPopup(elementsPopup)
});
elementsCloseButton.addEventListener('click', function () {
  clearForm(elementsForm);
  closePopup(elementsPopup);
});
profileForm.addEventListener('submit', submitFormHandler);
profileForm.addEventListener('submit', function () {
  closePopup(popupProfile)
});
initialCards.forEach(function (item) {
  elementsContainer.prepend(addCard(item.name, item.link))
});
imageCloseButton.addEventListener('click', function () {
  closePopup(imagePopup)
});