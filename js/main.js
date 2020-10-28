const headerNavBurger = document.querySelector(".header-nav_burger");
const bellButton = document.querySelector(".bell_button");
const popupContainer = document.querySelector(".popup-container");
const popupMenuClose = document.querySelector(".popup-menu_close");
const back = document.querySelector(".back");
const backCall = document.querySelector(".back-call");
const btnDispatchForm = document.querySelector(".btn-dispatch_form");
const thanks = document.querySelector(".thanks");
const thanksBackCall = document.querySelector(".thanks_back-call");
const adventisingLeft = document.querySelector(".adventising_left");
const adventisingRight = document.querySelector(".adventising_right");
const advertisingImg = document.querySelectorAll(".advertising_img");
const adventisingSliderBtns = document.querySelectorAll(".adventising_slider-btn");

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

// Слайдер
index = 0;

const activeAdvertising = n => {
    console.log(n);
    for(advImg of advertisingImg) {
        advImg.classList.remove('active');
    }
    advertisingImg[n].classList.add("active");
}

const activeSliderBtn = n => {
    for(advSlideBtn of adventisingSliderBtns) {
        advSlideBtn.classList.remove("active");
    }
    adventisingSliderBtns[n].classList.add("active");
}

const adventisingNext = () => {
    if(index == advertisingImg.length - 1) {
        index = 0;
        activeAdvertising(index);
        activeSliderBtn(index);
    } else {
        index++;
        activeAdvertising(index);
        activeSliderBtn(index);
    }
}

const adventisingPrev = () => {
    if(index == 0) {
        index = advertisingImg.length - 1;
        activeAdvertising(index);
        activeSliderBtn(index);
    } else {
        index--;
        activeAdvertising(index);
        activeSliderBtn(index);
    }
}

const clearInt = () => {
    clearInterval(interval)
}

adventisingSliderBtns.forEach((item, indexSlBtn) => {
    item.addEventListener('click', () => {
        index = indexSlBtn;
        activeAdvertising(index);
        activeSliderBtn(index);
        clearInt()
    })
})

const interval = setInterval(adventisingNext, 4500)



// Events
headerNavBurger.addEventListener('click', openMenu)
popupMenuClose.addEventListener('click', closeMenu)
popupContainer.addEventListener('click', closeMenu)
bellButton.addEventListener('click', openBellMenu)
backCall.addEventListener('click', closeBellMenu)
btnDispatchForm.addEventListener('click', dispatchForm)
thanksBackCall.addEventListener('click', closeDispatchForm)
adventisingLeft.addEventListener('click', adventisingPrev)
adventisingLeft.addEventListener('click', clearInt)
adventisingRight.addEventListener('click', adventisingNext)
adventisingRight.addEventListener('click', clearInt)