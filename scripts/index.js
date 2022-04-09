// //get all relevant elemenets from the DOM
// const modalWindow = document.querySelector('.popup');
// const editForm = document.querySelector('.popup__form');

// const editButton= document.querySelector('.profile__edit_button');
// const closeButton=document.querySelector('.popup__close');
// const profileTitle=document.querySelector('.profile__title');
// const profileDescription=document.querySelector('.profile__description');

// const titleInputField= editForm.querySelector('.popup__input_type_name');
// const descriptionInputField= editForm.querySelector('.popup__input_type_description')

// //write function to toggle modal visibility and submit button
// function toggleModalVisibility (){
//   if(!modalWindow.classList.contains('popup__is_opened')){
//       titleInputField.value=profileTitle.textContent;
//       descriptionInputField.value=profileDescription.textContent;
//   }
// modalWindow.classList.toggle('popup__is_opened');
// }

// function formSubmitHandler (evt) {
//     evt.preventDefault();

//     profileTitle.textContent=titleInputField.value;
//     profileDescription.textContent=descriptionInputField.value;

//     toggleModalVisibility();
// }
// //wiring the function from step2 to the appropriate elements from step1

// editForm.addEventListener('submit', formSubmitHandler);
// editButton.addEventListener('click', formSubmitHandler);

//popup related elements
const clickOnEditProfileButton = document.querySelector(
  ".profile__edit-button"
);
const popupElement = document.querySelector(".popup");
const clickOnClosePopupButton = document.querySelector(".popup__close");

//profile related elements
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Forms
const profileForm = document.forms.popup;
const profileFormNameInput = profileForm.elements.name;
const profileFormDescriptionInput = profileForm.elements.description;

// profileFormNameInput.addEventListener("input", function (event) {
//   const inputValue = event.target.value;
//   profileName.textContent = inputValue;
// });

profileForm.addEventListener("submit", function (event) {
  profileName.textContent = profileFormNameInput.value;
  profileDescription.textContent = profileFormDescriptionInput.value;
  event.preventDefault();
  popupElement.classList.remove("popup__is_opened");
});

//popup is opened
clickOnEditProfileButton.addEventListener("click", function (event) {
  popupElement.classList.add("popup__is_opened");
});

//popup is closed
clickOnClosePopupButton.addEventListener("click", function (event) {
  popupElement.classList.remove("popup__is_opened");
});
