// Elements
const slederItem = document.querySelectorAll(".sleder_item");
const sliderBtnRight = document.querySelector(".slider_btn-right");
const sliderBtnLeft = document.querySelector(".slider_btn-left");

index = 0;


// Function
const activeSlederItem = ind => {
    for(sledItems of slederItem) {
        sledItems.classList.remove('sleder_item_active');
    }
    slederItem[ind].classList.add('sleder_item_active');
}

const slederItemNext = () => {
    if(index == slederItem.length - 1) {
        index = 0;
        activeSlederItem(index);
    } else {
        index++;
        activeSlederItem(index);
    }
}

const slederItemPrev = () => {
    if(index == 0) {
        index = slederItem.length - 1;
        activeSlederItem(index);
    } else {
        index--;
        activeSlederItem(index);
    }
}

// Events
sliderBtnRight.addEventListener('click', slederItemNext);
sliderBtnLeft.addEventListener('click', slederItemPrev);