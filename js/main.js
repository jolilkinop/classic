// Elements
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
const reviewClientsButtonRight = document.querySelector(".review-clients_button-right");
const reviewClientsButtonLeft = document.querySelector(".review-clients_button-left");
const reviewClientsImg = document.querySelectorAll(".review-clients_img");


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

// Slider review
indexReview = [0, 1, 2, 3];

const activeSlideReview = ir => {
    for(reviewImg of reviewClientsImg){
        reviewImg.classList.remove('active');
        reviewImg.classList.remove('img-one');
        reviewImg.classList.remove('img-two');
        reviewImg.classList.remove('img-fhree');
        reviewImg.classList.remove('img-foru');
    }
    for(irn of ir){
        reviewClientsImg[irn].classList.add('active');
    }
    console.log(ir);
    reviewClientsImg[ir[0]].classList.add('img-one');
    reviewClientsImg[ir[1]].classList.add('img-two');
    reviewClientsImg[ir[2]].classList.add('img-fhree');
    reviewClientsImg[ir[3]].classList.add('img-foru');
}

const slideReviewNext = () => {
    if(indexReview[indexReview.length - 1] == reviewClientsImg.length - 1) {
        indexReview.shift();
        indexReview.push(0);
        activeSlideReview(indexReview);
    } else if(indexReview[indexReview.length - 1] == 0 || indexReview[indexReview.length - 1] > 0 && indexReview[indexReview.length - 1] !== reviewClientsImg.length - 1) {
        indexReview.shift();
        indexReview.push(indexReview[indexReview.length - 1] + 1);
        activeSlideReview(indexReview);
    } else {
        indexReview.shift();
        indexReview.push(indexReview[indexReview.length - 1] + 1);
        activeSlideReview(indexReview);
    }
}

const slideReviewPrev = () => {
    if(indexReview[0] == 0) {
        indexReview.pop();
        indexReview.unshift(indexReview.length);
        activeSlideReview(indexReview);
    } else if(indexReview[0] == indexReview.length - 1 || indexReview[0] > 0 && indexReview[indexReview.length - 1] !== reviewClientsImg.length - 1) {
        indexReview.pop();
        indexReview.unshift(indexReview[0] - 1);
        activeSlideReview(indexReview);
    } else {
        indexReview.pop();
        indexReview.unshift(indexReview[0] - 1);
        activeSlideReview(indexReview);
    }
}

adventisingSliderBtns.forEach((item, indexSlBtn) => {
    item.addEventListener('click', () => {
        index = indexSlBtn;
        activeAdvertising(index);
        activeSliderBtn(index);
        clearInt()
    })
})

const interval = setInterval(adventisingNext, 3500);
const intervalRewiew = setInterval(slideReviewNext, 3500);



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
reviewClientsButtonRight.addEventListener('click', slideReviewNext)
reviewClientsButtonLeft.addEventListener('click', slideReviewPrev)