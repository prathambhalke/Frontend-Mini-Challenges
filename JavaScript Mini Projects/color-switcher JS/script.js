const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e.target);

        if (e.target.id === "orange") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "purple") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "aqua") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
    })

})