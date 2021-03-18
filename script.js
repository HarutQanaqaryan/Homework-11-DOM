const infoMousePosition = document.querySelector('.info-for-mouse-position');

addEventListener('mousemove', (event) => {
    infoMousePosition.innerHTML = 'posX=' + event.pageX + '<br /> posY=' + event.pageY;
});

