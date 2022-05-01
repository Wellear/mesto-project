
function clearForm(formId) {
    formId.reset();
  }
  function disableButton(element) {
    element.classList.add("popup__button_inactive");
    element.disabled = true;
  }
  export{clearForm,disableButton}