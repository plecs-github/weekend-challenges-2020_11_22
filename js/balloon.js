const balloons = document.querySelectorAll('.balloon');
const container = document.querySelector('.flex-container');
const noBalloons = document.querySelector('.no-balloons');
let counter = 0;

for (let i = 0; i < balloons.length; i++) {
    let balloon = balloons[i];
    balloon.addEventListener("mouseover", function () {
        this.textContent = "Pop!";
        this.style.backgroundColor = "white";
        counter++;

        if (counter === balloons.length) {
            container.textContent = "";
            noBalloons.style.display = "block";
        }
    });
}