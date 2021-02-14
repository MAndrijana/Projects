let newColors = document.querySelector("#reset");
let square = document.querySelectorAll(".square");
let rgbColor = document.querySelector("#colorDisplay");
let h1 = document.querySelector("h1");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");

let randomNumber = Math.floor(Math.random() * 6);

function randomColor() {
    square.forEach(function(el, i) {
        let random1 = Math.floor(Math.random() * 256);
        let random2 = Math.floor(Math.random() * 256);
        let random3 = Math.floor(Math.random() * 256);
        el.style.backgroundColor = `rgb(${random1},${random2},${random3})`;
        if (i == randomNumber) {
            rgbColor.innerText = `rgb(${random1}, ${random2}, ${random3})`;
        }
    })
}

newColors.addEventListener("click", function() {
    randomColor();
    newColors.innerText = "new colors";
    h1.style.backgroundColor = "steelblue";
    $("#message").html("");
    if (easyBtn.classList.contains("selected")) {
        square.forEach(function(el, i) {
            if (i <= 1) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        })
    } else {
        square.forEach(function(el) {
            el.style.display = "block";
        })
    }
});

window.addEventListener("load", randomColor);

easyBtn.addEventListener("click", function() {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    randomNumber = Math.floor(Math.random() * 2);
    h1.style.backgroundColor = "steelblue";
    $("#message").html("");
    newColors.innerText = "new colors";
    randomColor();
    square.forEach(function(el, i) {
        if (i <= 1) {
            el.style.display = "block";
        } else {
            el.style.display = "none";
        }
    })
})

hardBtn.addEventListener("click", function() {
    randomColor();
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    $("#message").html("");
    newColors.innerText = "new colors";
    h1.style.backgroundColor = "steelblue";
    square.forEach(function(el) {
        el.style.display = "block";
    })
})

square.forEach(function(el, i) {
    el.addEventListener("click", function() {
        if (el.style.backgroundColor !== rgbColor.innerText.toLowerCase()) {
            $(el).fadeOut();
            $("#message").html("Try again").fadeIn(400);
        } else {
            $("#message").html("You won").fadeIn(400);
            newColors.innerText = "play again...";
            let bgColor = el.style.backgroundColor;
            h1.style.backgroundColor = bgColor;
            square.forEach(function(el) {
                el.style.backgroundColor = bgColor;
            })
        }
    })
})