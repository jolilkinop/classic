// Elements
const itemCardSizeBtn = document.querySelectorAll(".item-card_size-btn");
const itemCardImg = document.querySelectorAll(".item-card_img");
const popupImg = document.querySelector(".popup-img");

// Function
const activeBtn = () => {
    itemCardSizeBtn.forEach( item => {
        item.addEventListener('click', () => {
            if(item.classList.value !== 'item-card_size-btn choice') {
                itemCardSizeBtn.forEach(item => {
                    item.classList.remove('choice')
                })
                item.classList.add('choice')
            } else {
                item.classList.add('choice')
            }
        })
    })
}

const imageBold = () => {
    itemCardImg.forEach((itemImg, i, arr) => {
        itemImg.addEventListener('click', () => {
            if(itemImg.src !== undefined) {
                let centerImg = document.createElement('div');
                centerImg.classList.add("item-card_center");
                popupImg.appendChild(centerImg);

                let img = document.createElement('img');
                img.src = itemImg.src;
                img.classList.add("active-bold");
                centerImg.appendChild(img);
                centerImg.addEventListener('click', () => {
                    centerImg.removeChild(img);
                    popupImg.removeChild(centerImg);
                })
                img.addEventListener('click', () => {
                    centerImg.removeChild(img);
                    popupImg.removeChild(centerImg);
                })
            }
        
        });
    })
};


// Events
activeBtn();
imageBold();






