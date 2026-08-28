const beginButton = document.getElementById("beginButton");
const checkinSection = document.getElementById("checkin");
const welcomeSection = document.querySelector(".welcome-card");
const continueButton = document.getElementById("continueButton");
const feelingInput = document.getElementById("feelingInput");

if (beginButton) {
  beginButton.addEventListener("click", function () {
    welcomeSection.style.display = "none";
    checkinSection.style.display = "block";
  });
}

if (continueButton) {
  continueButton.addEventListener("click", function () {
    const feeling = feelingInput.value.trim();

    if (feeling === "") {
      alert("You can take your time. Share something when you're ready.");
      return;
    }

    localStorage.setItem("lifeResetFeeling", feeling);

    window.location.href = "reset.html";
  });
}
