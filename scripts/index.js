//popup related elements
const clickOnEditProfileButton = document.querySelector(
  ".profile__edit-button"
);
const popupElement = document.querySelector(".modal");
const clickOnClosePopupButton = document.querySelector(".popup__close");

//profile related elements
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Forms
const profileForm = document.forms.popup;
const profileFormNameInput = profileForm.elements.name;
const profileFormDescriptionInput = profileForm.elements.description;

profileForm.addEventListener("submit", function (event) {
  profileName.textContent = profileFormNameInput.value;
  profileDescription.textContent = profileFormDescriptionInput.value;
  event.preventDefault();
  popupElement.classList.remove("modal__is_opened");
});

//popup is opened
clickOnEditProfileButton.addEventListener("click", function (event) {
  popupElement.classList.add("modal__is_opened");
});

//popup is closed
clickOnClosePopupButton.addEventListener("click", function (event) {
  popupElement.classList.remove("modal__is_opened");
});
