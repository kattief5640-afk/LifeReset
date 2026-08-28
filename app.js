const continueButton = document.querySelector("#continueButton");
const feelingInput = document.querySelector("#feelingInput");

continueButton.addEventListener("click", function () {
  const feeling = feelingInput.value.trim();

  if (feeling === "") {
    alert("Please tell me how you're feeling first.");
    return;
  }

  // Save the feeling so the next page can use it
  localStorage.setItem("userFeeling", feeling);

  // Go to the checking page
  window.location.href = "checking.html";
});

   
