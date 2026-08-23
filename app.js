const beginButton = document.querySelector("button");
const checkin = document.querySelector("#checkin");

beginButton.addEventListener("click", function () {
  checkin.style.display = "block";
});

const continueButton = document.querySelector("#continueButton");
const feelingInput = document.querySelector("#feelingInput");

continueButton.addEventListener("click", function () {
  const feeling = feelingInput.value;

  alert("Thank you for sharing. You said: " + feeling);
});
