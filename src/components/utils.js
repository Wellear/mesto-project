import { profileTitle, profileAbout, nameInput, aboutInput } from "./consts";
function submitProfileForm(evt) {
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
function disableButton(element) {
  element.classList.add("popup__button_inactive");
  element.disabled = true;
}
export { submitProfileForm, actualizationForm, clearForm, disableButton };
