const setupSection = document.getElementById("setupSection");
const nameInput = document.getElementById("nameInput");
const languageSelect = document.getElementById("languageSelect");
const saveSetupButton = document.getElementById("saveSetupButton");
const welcomeSection = document.getElementById("welcomeSection");

const translations = {

en: {
nameRequired: "Please enter a name or nickname.",
ready: "You're ready, {name}. 🌱",
begin: "Let's begin",
emptyFeeling: "You can take your time. Share something when you're ready."
},

es: {
nameRequired: "Por favor, escribe un nombre o apodo.",
ready: "Estás listo/a, {name}. 🌱",
begin: "Comencemos",
emptyFeeling: "Tómate tu tiempo. Comparte algo cuando estés listo/a."
},

fr: {
nameRequired: "Veuillez entrer un nom ou un surnom.",
ready: "Tu es prêt(e), {name}. 🌱",
begin: "Commençons",
emptyFeeling: "Prends ton temps. Partage quelque chose quand tu es prêt(e)."
},

ht: {
nameRequired: "Tanpri antre yon non oswa yon ti non.",
ready: "Ou pare, {name}. 🌱",
begin: "Ann kòmanse",
emptyFeeling: "Pran tan ou. Pataje yon bagay lè ou pare."
}

};

/* =========================
GET LANGUAGE
========================= */

function getLanguage() {

return localStorage.getItem("lifeResetLanguage") || "en";

}

/* =========================
CHECK-IN LANGUAGE
========================= */

function applyCheckinLanguage() {

  const language = getLanguage();

  const checkinTranslations = {

    en: {
      title: "I'm glad you're here.",
      message: "You can take your time. Tell me how you're really doing today.",
      placeholder: "Write what's on your mind..."
    },

    es: {
      title: "Me alegra que estés aquí.",
      message: "Tómate tu tiempo. Cuéntame cómo te sientes realmente hoy.",
      placeholder: "Escribe lo que tienes en mente..."
    },

    fr: {
      title: "Je suis heureux(se) que tu sois ici.",
      message: "Prends ton temps. Dis-moi comment tu vas vraiment aujourd'hui.",
      placeholder: "Écris ce que tu as en tête..."
    },

    ht: {
      title: "Mwen kontan ou la.",
      message: "Pran tan ou. Di mwen kijan ou santi w toutbon jodi a.",
      placeholder: "Ekri sa ki nan tèt ou..."
    }

  };

  const t = checkinTranslations[language] || checkinTranslations.en;

  const title = document.getElementById("checkinTitle");
  const message = document.getElementById("checkinMessage");
  const input = document.getElementById("feelingInput");

  if (title) {
    title.textContent = t.title;
  }

  if (message) {
    message.textContent = t.message;
  }

  if (input) {
    input.placeholder = t.placeholder;
  }

}

/* =========================
SETUP
========================= */

if (saveSetupButton) {

saveSetupButton.addEventListener("click", function () {

const name = nameInput.value.trim();
const language = languageSelect.value;

if (name === "") {

  alert(
    translations[language].nameRequired
  );

  return;
}

localStorage.setItem("lifeResetName", name);
localStorage.setItem("lifeResetLanguage", language);

setupSection.style.display = "none";
welcomeSection.style.display = "block";

const welcomeText =
  welcomeSection.querySelector("p");

const beginButton =
  document.getElementById("beginButton");

if (welcomeText) {

  welcomeText.textContent =
    translations[language].ready.replace(
      "{name}",
      name
    );

}

if (beginButton) {

  beginButton.textContent =
    translations[language].begin;

}

});

}

/* =========================
BEGIN
========================= */

const beginButton =
document.getElementById("beginButton");

const checkinSection =
document.getElementById("checkin");

const continueButton =
document.getElementById("continueButton");

const feelingInput =
document.getElementById("feelingInput");

if (beginButton) {

beginButton.addEventListener("click", function () {

  welcomeSection.style.display = "none";
  checkinSection.style.display = "block";

  applyCheckinLanguage();

});

}

/* =========================
CHECK-IN
========================= */

if (continueButton) {

continueButton.addEventListener("click", function () {

const feeling =
  feelingInput.value.trim();

const language =
  getLanguage();

if (feeling === "") {

  alert(
    translations[language].emptyFeeling
  );

  return;
}

localStorage.setItem(
  "lifeResetFeeling",
  feeling
);


const text =
  feeling.toLowerCase();


/* =========================
   URGENT WORDS
========================= */

const urgentWords = [

  /* English */

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
  "going to hurt someone",

  /* Spanish */

  "suicidio",
  "suicida",
  "matarme",
  "hacerme daño",
  "hacer daño a alguien",
  "quiero morir",
  "no quiero vivir",
  "terminar con mi vida",

  /* French */

  "suicide",
  "suicidaire",
  "me tuer",
  "me faire du mal",
  "faire du mal à quelqu'un",
  "je veux mourir",
  "je ne veux pas vivre",
  "mettre fin à ma vie",

  /* Haitian Creole */

  "swisid",
  "touye tèt mwen",
  "mwen vle mouri",
  "mwen pa vle viv",
  "fè tèt mwen mal",
  "fè yon moun mal",
  "touye yon moun"

];


/* =========================
   DOWN WORDS
========================= */

const downWords = [

  /* English */

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
  "angry",

  /* Spanish */

  "triste",
  "me siento triste",
  "solo",
  "sola",
  "me siento solo",
  "me siento sola",
  "sin esperanza",
  "abrumado",
  "abrumada",
  "ansioso",
  "ansiosa",
  "preocupado",
  "preocupada",
  "agotado",
  "agotada",
  "enojado",
  "enojada",
  "frustrado",
  "frustrada",

  /* French */

  "triste",
  "je suis triste",
  "seul",
  "seule",
  "je me sens seul",
  "je me sens seule",
  "désespéré",
  "désespérée",
  "dépassé",
  "dépassée",
  "anxieux",
  "anxieuse",
  "inquiet",
  "inquiète",
  "épuisé",
  "épuisée",
  "frustré",
  "frustrée",
  "en colère",

  /* Haitian Creole */

  "tris",
  "mwen tris",
  "poukont mwen",
  "mwen santi mwen poukont mwen",
  "san espwa",
  "mwen santi tout bagay twòp",
  "mwen pa ka fè fas",
  "mwen enkyè",
  "mwen fatige anpil",
  "mwen fache",
  "mwen fristre"

];


/* =========================
   HAPPY WORDS
========================= */

const happyWords = [

  /* English */

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
  "blessed",

  /* Spanish */

  "feliz",
  "contento",
  "contenta",
  "tranquilo",
  "tranquila",
  "en paz",
  "agradecido",
  "agradecida",
  "gracias",
  "bien",
  "genial",
  "emocionado",
  "emocionada",
  "alegre",
  "positivo",
  "positiva",
  "esperanzado",
  "esperanzada",
  "relajado",
  "relajada",
  "orgulloso",
  "orgullosa",

  /* French */

  "heureux",
  "heureuse",
  "content",
  "contente",
  "paisible",
  "calme",
  "reconnaissant",
  "reconnaissante",
  "merci",
  "bien",
  "super",
  "enthousiaste",
  "joyeux",
  "joyeuse",
  "positif",
  "positive",
  "plein d'espoir",
  "pleine d'espoir",
  "détendu",
  "détendue",
  "fier",
  "fière",

  /* Haitian Creole */

  "kontan",
  "mwen kontan",
  "anpè",
  "mwen anpè",
  "kalme",
  "mwen kalm",
  "rekonesan",
  "mwen rekonesan",
  "byen",
  "trè byen",
  "eksite",
  "mwen fyè",
  "pozitif",
  "mwen gen espwa",
  "beni"

];


/* =========================
   DETECT FEELING
========================= */

const isUrgent =
  urgentWords.some(function (word) {

    return text.includes(word);

  });


const isDown =
  downWords.some(function (word) {

    return text.includes(word);

  });


const isHappy =
  happyWords.some(function (word) {

    return text.includes(word);

  });


/* =========================
   SEND USER TO RESET
========================= */

if (isUrgent) {

  window.location.href =
    "safety.html";

}

else if (isDown) {

  window.location.href =
    "down-reset.html";

}

else if (isHappy) {

  window.location.href =
    "happy-reset.html";

}

else {

  window.location.href =
    "reset.html";

}

});

}



  
  



  
