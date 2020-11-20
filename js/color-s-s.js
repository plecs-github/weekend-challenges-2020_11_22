const body = document.querySelector('.body')

const blue = document.querySelector('.blue');
blue.onclick = function () {
    body.setAttribute("class", "blue")
}

const red = document.querySelector('.red');
red.onclick = function () {
    body.setAttribute("class", "red")
}

const yellow = document.querySelector('.yellow');
yellow.onclick = function () {
    body.setAttribute("class", "yellow")
}

const green = document.querySelector('.green');
green.onclick = function () {
    body.setAttribute("class", "green")
}

/* btn.onclick = function () {
    result.innerHTML=(parseFloat((feet.value*30.48) + (inches.value*2.54)).toFixed(2))
} */