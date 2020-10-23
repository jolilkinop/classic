const headerNavBurger = document.querySelector(".header-nav_burger");
const bellButton = document.querySelector(".bell_button");
const popupContainer = document.querySelector(".popup-container");
const popupMenuClose = document.querySelector(".popup-menu_close");
const back = document.querySelector(".back");
const backCall = document.querySelector(".back-call")
const btnDispatchForm = document.querySelector(".btn-dispatch_form")
const thanks = document.querySelector(".thanks")
const thanksBackCall = document.querySelector(".thanks_back-call")

// Function
function openMenu () {
    popupContainer.classList.add('active')
}

function closeMenu () {
    popupContainer.classList.remove('active')
}

function openBellMenu () {
    back.classList.add('active')
}

function closeBellMenu () {
    back.classList.remove('active')
}

function dispatchForm () {
    thanks.classList.add('active')
}

function closeDispatchForm () {
    thanks.classList.remove('active')
}

// Events
headerNavBurger.addEventListener('click', openMenu)
popupMenuClose.addEventListener('click', closeMenu)
popupContainer.addEventListener('click', closeMenu)
bellButton.addEventListener('click', openBellMenu)
backCall.addEventListener('click', closeBellMenu)
btnDispatchForm.addEventListener('click', dispatchForm)
thanksBackCall.addEventListener('click', closeDispatchForm)