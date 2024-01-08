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

const onSubmitHandler = async () => {
  try {
    const response = await fetch(
      `https://baconipsum.com/api/?type=all-meat&sentences=${userInputData}&start-with-lorem=1`
    );
    const data = await response.json();
    para.push(data);
    console.log(para);

    paragraphContainer.innerHTML = para.map((p) => `${p}<br>`).join("");
  } catch (error) {
    console.error(error);
  }
};

generateButton.addEventListener("click", onSubmitHandler);
