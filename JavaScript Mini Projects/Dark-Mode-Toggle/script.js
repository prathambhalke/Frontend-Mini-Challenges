const checkbox = document.querySelector("#checkbox");

const toggleFunction = () => {
  document.body.classList.toggle("dark");
};
checkbox.addEventListener("change", toggleFunction);
