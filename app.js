const setupSection = document.getElementById("setupSection");
const nameInput = document.getElementById("nameInput");
const languageSelect = document.getElementById("languageSelect");
const saveSetupButton = document.getElementById("saveSetupButton");
const welcomeSection = document.getElementById("welcomeSection");

if (saveSetupButton) {

  saveSetupButton.addEventListener("click", function () {

    const name = nameInput.value.trim();
    const language = languageSelect.value;

    if (name === "") {
      alert("Please enter a name or nickname.");
      return;
    }

    localStorage.setItem("lifeResetName", name);
    localStorage.setItem("lifeResetLanguage", language);

    setupSection.style.display = "none";
    welcomeSection.style.display = "block";

  });

}

const beginButton = document.getElementById("beginButton");
const checkinSection = document.getElementById("checkin");
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
  "harm someone",
  "going to hurt myself",
  "going to hurt someone"
];

const downWords = [
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
  "need to escape",
  "sad",
  "stressed",
  "overwhelmed",
  "anxious",
  "worried",
  "exhausted",
  "lonely",
  "frustrated",
  "angry"
];

const happyWords = [
  "happy",
  "content",
  "peaceful",
  "calm",
  "grateful",
  "thankful",
  "good",
  "great",
  "excited",
  "joyful",
  "positive",
  "hopeful",
  "relaxed",
  "proud",
  "blessed"
];

const isUrgent = urgentWords.some(function (word) {
  return text.includes(word);
});

const isDown = downWords.some(function (word) {
  return text.includes(word);
});

const isHappy = happyWords.some(function (word) {
  return text.includes(word);
});

if (isUrgent) {
  window.location.href = "safety.html";
} else if (isDown) {
  window.location.href = "support.html";
} else if (isHappy) {
  window.location.href = "happy-reset.html";
} else {
  window.location.href = "reset.html";
}

  
  

  
