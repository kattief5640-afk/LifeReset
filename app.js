const beginButton = document.querySelector("#beginButton");
const checkin = document.querySelector("#checkin");
const continueButton = document.querySelector("#continueButton");
const feelingInput = document.querySelector("#feelingInput");

// Show the check-in form when user clicks "Let's begin"
if (beginButton) {
  beginButton.addEventListener("click", function () {
    checkin.style.display = "block";
    checkin.scrollIntoView({ behavior: "smooth" });
  });
}

// Handle continue button click
if (continueButton) {
  continueButton.addEventListener("click", function () {
    const feeling = feelingInput.value.trim();
    
    if (feeling === "") {
      alert("Please share something before continuing.");
      return;
    }
    
    alert("Thank you for sharing. You said: " + feeling);
    
    // Reset the form
    feelingInput.value = "";
    checkin.style.display = "none";
    document.getElementById("reset").style.display = "block";
  });
}

// Allow Enter key to submit in textarea
if (feelingInput) {
  feelingInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && event.ctrlKey) {
      continueButton.click();
    }
  });
}
