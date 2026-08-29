console.log("NEW LIFERESET APP.JS");

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

  const text = feeling.toLowerCase();

  const urgentWords = [
    "kill myself",
    "suicide",
    "suicidal",
    "hurt myself",
    "harm myself",
    "end my life",
    "want to die",
    "don't want to live",
    "hurt someone",
    "kill someone",
    "harm someone"
  ];

  const distressWords = [
    "feeling down",
    "really down",
    "hopeless",
    "can't cope",
    "cannot cope",
    "can't handle this",
    "can't take this",
    "feel alone",
    "so alone",
    "feel worthless",
    "feel trapped",
    "running away",
    "want to run away",
    "need to escape"
  ];

  const isUrgent = urgentWords.some(function (word) {
    return text.includes(word);
  });

  const isDistressed = distressWords.some(function (word) {
    return text.includes(word);
  });

  if (isUrgent) {
    window.location.href = "safety.html";
  } else if (isDistressed) {
    window.location.href = "support.html";
  } else {
    window.location.href = "reset.html";
  }
});
}
