const stars = document.querySelectorAll(".fa-star");
const emojis = document.querySelectorAll(".fa-regular");

const emojiColorArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
  stars.forEach((star, a) => {
    a < index + 1
      ? star.classList.add("active")
      : star.classList.remove("active");

    //   if(a < index + 1) {
    //     star.classList.add("active")
    //   }else{
    //     star.classList.remove("active");
    //   }
    console.log(index);
  });

  emojis.forEach((emoji) => {
    emoji.style.transform = `translatex(-${index * 50}px)`;
    emoji.style.color = emojiColorArray[index];
  });
}
