const showInputError = (formItem, inputItem, errorMessage, options) => {
  const errorElement = formItem.querySelector(`#${inputItem.id}-error`);
  inputItem.classList.add(options.inputErrorClass);
  errorElement.classList.add(options.errorMessageClass);
  errorElement.textContent = errorMessage;
};
const hideInputError = (formItem, inputItem, options) => {
  const errorElement = formItem.querySelector(`#${inputItem.id}-error`);
  inputItem.classList.remove(options.inputErrorClass);
  errorElement.classList.remove(options.errorClass);
  errorElement.textContent = "";
};
const checkInputValidity = (formItem, inputItem, options) => {
  if (!inputItem.validity.valid) {
    showInputError(formItem, inputItem, inputItem.validationtext, options);
  } else {
    hideInputError(formItem, inputItem, options);
  }
};
const invalidInput = (inputs) => {
  return inputs.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
const toggleButtonState = (inputs, buttons, options) => {
  if (invalidInput(inputs)) {
    buttons.disabled = true;
    buttons.classList.add(options.inactives);
  } else {
    buttons.disabled = false;
    buttons.classList.remove(options.inactiveButtons);
  }
};
const setEventListeners = (formItem, options) => {
  const inputs = Array.from(formItem.querySelectorAll(options.inputItem));
  const buttons = formItem.querySelector(options.buttons);
  toggleButtonState(inputs, buttons, options);
  inputs.forEach((inputItem) => {
    inputItem.addEventListener("keyup", function () {
      checkInputValidity(formItem, inputItem, options);
      toggleButtonState(inputs, buttons, options);
    });
  });
};
const enableValidation = (options) => {
  const forms = Array.from(document.querySelectorAll(options.formItem));
  forms.forEach((formItem) => {
    formItem.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formItem, options);
  });
};
export {
  enableValidation,
  setEventListeners,
  showInputError,
  hideInputError,
  checkInputValidity,
  invalidInput,
  toggleButtonState,
};
