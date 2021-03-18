const btnColor = document.querySelector('button')
const paragraph = document.querySelector("p");

btnColor.addEventListener("click", () => {
paragraph.innerHTML = paragraph.textContent
  .split(" ")
  .map(el => {
    if(el.length > 8) {
       return '<span class="color">' + el + '</span>'
    }else if(el === '?') {
        return el.replace("?", "🤔")
     }else if (el === '!') {
        return el.replace("!", "😲")
     } else {
    return el;
    }
}).join(' ')
})

