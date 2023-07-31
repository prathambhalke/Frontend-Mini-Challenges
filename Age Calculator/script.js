const form = document.getElementById("ageCalculatorForm");
const resultDiv = document.getElementById("result");
const clearButton = document.getElementById("clearButton");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const birthdate = new Date(document.getElementById("birthdate").value);
  const now = new Date();
  const diff = now - birthdate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("years").textContent = years;
  document.getElementById("months").textContent = months;
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  clearButton.disabled = false;
});

clearButton.addEventListener("click", () => {
  document.getElementById("birthdate").value = "";
  document.getElementById("years").textContent = "";
  document.getElementById("months").textContent = "";
  document.getElementById("days").textContent = "";
  document.getElementById("hours").textContent = "";
  document.getElementById("minutes").textContent = "";
  document.getElementById("seconds").textContent = "";
  clearButton.disabled = true;
});

