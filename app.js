const beginButton = document.querySelector("#beginButton");
const checkinSection = document.querySelector("#checkin");
const continueButton = document.querySelector("#continueButton");
const feelingInput = document.querySelector("#feelingInput");

// Let's Begin
beginButton.addEventListener("click", function () {
  checkinSection.style.display = "block";
  beginButton.parentElement.style.display = "none";
});

// Continue
continueButton.addEventListener("click", function () {
  const feeling = feelingInput.value.trim();

  if (feeling === "") {
    alert("You can take your time. Share something when you're ready.");
    return;
  }

  localStorage.setItem("lifeResetFeeling", feeling);

  window.location.href = "reset.html";
});

  
   
