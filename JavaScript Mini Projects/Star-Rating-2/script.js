const starPartial = document.querySelector(".star-partial");
const stars = document.querySelectorAll(".star");
const starRange = document.querySelector("#starRange");
const output = document.querySelector("#output");

let starCount = 5;
const initialValue = 2.3;
let partialStar = null;

function fillCompleteStars(rating) {
    let count = Math.floor(rating);

    for (let i = 0; i < count; i++) {
        stars[i].classList.add("star-filled");
    }

    for (let i = count; i < starCount; i++) {
        stars[i].classList.remove("star-filled");
    }

    if (partialStar) {
        partialStar.style.width = '0%';
    }

    if (count !== rating) {
        partialStar = stars[count].querySelector(".star-partial");
        partialStar.style.width = `${(rating - count) * 100}%`;
        console.log(`${(count - rating) * 100}%`)
    }

}

function rangeInputHandler(starRating) {
    fillCompleteStars(starRating);
    output.textContent = starRating;
}

starRange.addEventListener("input", (e) => rangeInputHandler(+e.target.value));
starRange.setAttribute("max", starCount)
rangeInputHandler(initialValue);
