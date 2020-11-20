let feet = document.querySelector ('.feet');
let inches = document.querySelector('.inches');
let btn = document.querySelector ('.btn');
let result = document.querySelector ('span.sum');

btn.onclick = function () {
    result.innerHTML=(parseFloat((feet.value*30.48) + (inches.value*2.54)).toFixed(2))
}

/* 1 feet = 30.48 cm,
1 inch = 2.54 cm */