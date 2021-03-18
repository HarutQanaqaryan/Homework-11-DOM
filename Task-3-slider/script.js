const sliderImage = document.querySelectorAll("img")
const nextImg = document.querySelector(".next")
const prevImg = document.querySelector(".prev")
const dots = document.querySelectorAll('.dot')

let currentImage = 1;
function slider(n) {
    if (n > sliderImage.length) {
        currentImage = 1
    }
    if (n < 1) {
        currentImage = sliderImage.length
    }
    sliderImage.forEach((el) => {
        el.style.display = 'none';
    })
    sliderImage[currentImage - 1].style.display = "block";
}

nextImg.addEventListener("click", () => {
    slider(currentImage += 1)
})


prevImg.addEventListener("click", () => {
    slider(currentImage -= 1)
})

dots.forEach(el => {
    el.addEventListener("click", () => {
        if(el >= currentImage.length){
        slider(currentImage -= 1)
        }
        slider(currentImage += 1)
    })
})



