const body = document.querySelector("body");

let promt = prompt()
let left = 30;
let time = 300;
function generateColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
};

for (let i = 0; i < promt; i++) {
    setTimeout(() => {
        body.innerHTML += `<div 
    style="width: 150px;
    height: 150px; 
    position: absolute; 
    top: 250px; 
    left: ${left}px; 
    background-color: ${generateColor()};">
    </div>`
        left += 250;
    }, time);
    time += 300;
};