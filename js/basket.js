// Elements
const btnDispatchFormLink = document.querySelector(".btn-dispatch_form-link");
const order = document.querySelector(".order");
const orderPopup = document.querySelector(".order_popup");
const orderBtn = document.querySelector(".order_btn");
const orderCheckbox = document.querySelector(".order_checkbox");
const thanks = document.querySelector(".thanks");
const thanksBackCall = document.querySelector(".thanks_back-call");
const thanksClose = document.querySelector(".thanks_close");


// Function
function openForm () {
    order.classList.add('active')
}

function closeForm () {
    order.classList.remove('active')
}

function openDispatch () {
    thanks.classList.add('active')
}

function closeDispatch () {
    thanks.classList.remove('active')
}


// Events
btnDispatchFormLink.addEventListener('click', openForm)
orderBtn.addEventListener('click', closeForm)
orderCheckbox.addEventListener('click', openDispatch)
thanksBackCall.addEventListener('click', closeDispatch)
thanksClose.addEventListener('click', closeDispatch)
