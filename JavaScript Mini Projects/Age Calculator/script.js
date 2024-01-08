const form = document.getElementById("ageCalculatorForm");
const resultDiv = document.getElementById("result");
const clearButton = document.getElementById("clearButton");
const birthDateInput = document.getElementById("birthdate");
const yearsOld = document.getElementById("years");
const monthsOld = document.getElementById("months");
const daysOld = document.getElementById("days");
const hoursOld = document.getElementById("hours");
const minutesOld = document.getElementById("minutes");
const secondsOld = document.getElementById("seconds");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const birthdate = new Date(birthDateInput.value);
  const ageInMilliseconds = Date.now() - birthdate.getTime();
  const ageDate = new Date(ageInMilliseconds);

  const years = ageDate.getUTCFullYear() - 1970;
  const months = ageDate.getUTCMonth();
  const days = ageDate.getUTCDate() - 1; // Subtract 1 to account for the day of birth
  const hours = ageDate.getUTCHours();
  const minutes = ageDate.getUTCMinutes();
  const seconds = ageDate.getUTCSeconds();

  yearsOld.innerHTML = years;
  monthsOld.innerHTML = months;
  daysOld.innerHTML = days;
  hoursOld.innerHTML = hours;
  minutesOld.innerHTML = minutes;
  secondsOld.innerHTML = seconds;
  birthDateInput.value = "";
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
