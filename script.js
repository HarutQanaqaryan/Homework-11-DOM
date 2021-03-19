const posX = document.querySelector('.pos-x')
const posY = document.querySelector('.pos-y')

document.addEventListener('mousemove', (event) => {
    posX.value = event.pageX
    posY.value = event.pageY
});

