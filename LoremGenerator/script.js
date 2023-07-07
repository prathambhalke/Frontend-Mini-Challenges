console.log("jai shree ram");

const userInput = document.querySelector(".userInput");
const generateButton = document.querySelector(".btn");
const paragraphContainer = document.querySelector(".paragraphContainer");

let userInputData = "";
let para = [];
userInput.addEventListener("input", (e) => {
  userInputData = e.target.value;
  console.log(userInputData);
});

const onSubmitHandler = async (userInputData) => {
  let result = await fetch(
    `https://baconipsum.com/api/?type=all-meat&sentences=${userInputData}&start-with-lorem=1`
  )
    .then((response) => response.json())
    .then((data) => {
      para.push(data);
    });

  console.log(para);

  for (let i = 0; i < para.length; i++) {
    paragraphContainer.innerHTML = para[i] + "<br>";
  }
};

generateButton.addEventListener("click", onSubmitHandler);
