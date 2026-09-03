/* =========================================================
   LIFERESET APP
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const setupSection = document.getElementById("setupSection");
const nameInput = document.getElementById("nameInput");
const languageSelect = document.getElementById("languageSelect");
const saveSetupButton = document.getElementById("saveSetupButton");

const welcomeSection = document.getElementById("welcomeSection");
const beginButton = document.getElementById("beginButton");

const checkinSection = document.getElementById("checkin");
const continueButton = document.getElementById("continueButton");
const feelingInput = document.getElementById("feelingInput");

const resetSection = document.getElementById("reset");
const micButton = document.getElementById("micButton");


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

  en: {
    nameRequired: "Please enter a name or nickname.",
    ready: "You're ready, {name}. 🌱",
    begin: "Let's begin",
    emptyFeeling: "You can take your time. Share something when you're ready.",

    tagline: "You don't have to figure everything out alone.",
    welcomeTitle: "Welcome to LifeReset 🌱",
    nameQuestion: "What would you like me to call you?",
    namePlaceholder: "Your name or nickname",
    languageQuestion: "Choose your language:",
    continueButton: "Continue",

    welcomeMessage:
      "Whatever you're carrying today, you don't have to hide it here. Take a breath. Tell us what's on your mind.",

    checkinTitle: "I'm glad you're here.",
    checkinMessage:
      "You can take your time. Tell me how you're really doing today.",
    feelingPlaceholder: "Write what's on your mind...",

    resetTitle: "Let's take your next step",
    resetMessage:
      "You don't have to fix everything today. Let's focus on one small step that can help you feel a little better.",
    resetButton: "Show Me My Reset"
  },

  es: {
    nameRequired: "Por favor, escribe un nombre o apodo.",
    ready: "Estás listo/a, {name}. 🌱",
    begin: "Comencemos",
    emptyFeeling:
      "Tómate tu tiempo. Comparte algo cuando estés listo/a.",

    tagline: "No tienes que resolverlo todo por tu cuenta.",
    welcomeTitle: "Bienvenido a LifeReset 🌱",
    nameQuestion: "¿Cómo te gustaría que te llamara?",
    namePlaceholder: "Tu nombre o apodo",
    languageQuestion: "Elige tu idioma:",
    continueButton: "Continuar",

    welcomeMessage:
      "No tienes que esconder aquí todo lo que llevas contigo. Respira. Cuéntanos qué tienes en mente.",

    checkinTitle: "Me alegra que estés aquí.",
    checkinMessage:
      "Tómate tu tiempo. Cuéntame cómo te sientes realmente hoy.",
    feelingPlaceholder:
      "Escribe lo que tienes en mente...",

    resetTitle: "Demos tu siguiente paso",
    resetMessage:
      "No tienes que solucionar todo hoy. Concentrémonos en un pequeño paso que pueda ayudarte a sentirte un poco mejor.",
    resetButton: "Muéstrame mi reinicio"
  },

  fr: {
    nameRequired: "Veuillez entrer un nom ou un surnom.",
    ready: "Tu es prêt(e), {name}. 🌱",
    begin: "Commençons",
    emptyFeeling:
      "Prends ton temps. Partage quelque chose quand tu es prêt(e).",

    tagline: "Tu n'as pas à tout comprendre seul(e).",
    welcomeTitle: "Bienvenue sur LifeReset 🌱",
    nameQuestion:
      "Comment aimerais-tu que je t'appelle ?",
    namePlaceholder: "Ton nom ou ton surnom",
    languageQuestion: "Choisis ta langue :",
    continueButton: "Continuer",

    welcomeMessage:
      "Tu n'as pas besoin de cacher ici tout ce que tu portes. Respire. Dis-nous ce que tu as en tête.",

    checkinTitle: "Je suis heureux(se) que tu sois ici.",
    checkinMessage:
      "Prends ton temps. Dis-moi comment tu vas vraiment aujourd'hui.",
    feelingPlaceholder:
      "Écris ce que tu as en tête...",

    resetTitle: "Passons à ta prochaine étape",
    resetMessage:
      "Tu n'as pas besoin de tout régler aujourd'hui. Concentrons-nous sur une petite étape qui pourrait t'aider à te sentir un peu mieux.",
    resetButton: "Montre-moi mon reset"
  },

  ht: {
    nameRequired:
      "Tanpri antre yon non oswa yon ti non.",
    ready: "Ou pare, {name}. 🌱",
    begin: "Ann kòmanse",
    emptyFeeling:
      "Pran tan ou. Pataje yon bagay lè ou pare.",

    tagline:
      "Ou pa oblije rezoud tout bagay poukont ou.",
    welcomeTitle:
      "Byenveni nan LifeReset 🌱",
    nameQuestion:
      "Kijan ou ta renmen mwen rele ou?",
    namePlaceholder:
      "Non ou oswa ti non ou",
    languageQuestion:
      "Chwazi lang ou:",
    continueButton:
      "Kontinye",

    welcomeMessage:
      "Kèlkeswa sa w ap pote jodi a, ou pa bezwen kache l isit la. Pran yon souf. Di nou sa ki nan tèt ou.",

    checkinTitle:
      "Mwen kontan ou la.",
    checkinMessage:
      "Pran tan ou. Di mwen kijan ou santi w toutbon jodi a.",
    feelingPlaceholder:
      "Ekri sa ki nan tèt ou...",

    resetTitle:
      "Ann pran pwochen etap ou a",
    resetMessage:
      "Ou pa bezwen rezoud tout bagay jodi a. Ann konsantre sou yon ti etap ki ka ede w santi w yon ti jan pi byen.",
    resetButton:
      "Montre m reset mwen an"
  }

};


/* =========================================================
   GET LANGUAGE
   ========================================================= */

function getLanguage() {

  return localStorage.getItem("lifeResetLanguage") || "en";

}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyLanguage(language) {

  const t = translations[language] || translations.en;

  const tagline = document.getElementById("tagline");
  const welcomeTitle = document.getElementById("welcomeTitle");
  const nameQuestion = document.getElementById("nameQuestion");
  const languageQuestion = document.getElementById("languageQuestion");

  if (tagline) {
    tagline.textContent = t.tagline;
  }

  if (welcomeTitle) {
    welcomeTitle.textContent = t.welcomeTitle;
  }

  if (nameQuestion) {
    nameQuestion.textContent = t.nameQuestion;
  }

  if (nameInput) {
    nameInput.placeholder = t.namePlaceholder;
  }

  if (languageQuestion) {
    languageQuestion.textContent = t.languageQuestion;
  }

  if (saveSetupButton) {
    saveSetupButton.textContent = t.continueButton;
  }

  if (beginButton) {
    beginButton.textContent = t.begin;
  }

  const checkinTitle =
    document.getElementById("checkinTitle");

  const checkinMessage =
    document.getElementById("checkinMessage");

  if (checkinTitle) {
    checkinTitle.textContent = t.checkinTitle;
  }

  if (checkinMessage) {
    checkinMessage.textContent = t.checkinMessage;
  }

  if (feelingInput) {
    feelingInput.placeholder = t.feelingPlaceholder;
  }

  const resetTitle =
    document.getElementById("resetTitle");

  const resetMessage =
    document.getElementById("resetMessage");

  const resetButton =
    document.getElementById("resetButton");

  if (resetTitle) {
    resetTitle.textContent = t.resetTitle;
  }

  if (resetMessage) {
    resetMessage.textContent = t.resetMessage;
  }

  if (resetButton) {
    resetButton.textContent = t.resetButton;
  }

}


/* =========================================================
   SETUP / FIRST CONTINUE BUTTON
   ========================================================= */

if (saveSetupButton) {

  saveSetupButton.addEventListener("click", function () {

    const name =
      nameInput ? nameInput.value.trim() : "";

    const language =
      languageSelect ? languageSelect.value : "en";

    const t =
      translations[language] || translations.en;


    /* NAME REQUIRED */

    if (name === "") {

      alert(t.nameRequired);

      if (nameInput) {
        nameInput.focus();
      }

      return;
    }


    /* SAVE USER INFORMATION */

    localStorage.setItem(
      "lifeResetName",
      name
    );

    localStorage.setItem(
      "lifeResetLanguage",
      language
    );


    /* UPDATE LANGUAGE */

    applyLanguage(language);


    /* HIDE SETUP */

    if (setupSection) {
      setupSection.style.display = "none";
    }


    /* SHOW WELCOME */

    if (welcomeSection) {

      welcomeSection.style.display = "block";

      const welcomeText =
        welcomeSection.querySelector("p");

      if (welcomeText) {

        welcomeText.textContent =
          t.ready.replace(
            "{name}",
            name
          );

      }

    }

  });

}


/* =========================================================
   BEGIN BUTTON
   ========================================================= */

if (beginButton) {

  beginButton.addEventListener("click", function () {

    const language = getLanguage();

    const t =
      translations[language] || translations.en;


    if (welcomeSection) {
      welcomeSection.style.display = "none";
    }

    if (checkinSection) {
      checkinSection.style.display = "block";
    }


    /* APPLY CHECK-IN LANGUAGE */

    const checkinTitle =
      document.getElementById("checkinTitle");

    const checkinMessage =
      document.getElementById("checkinMessage");

    if (checkinTitle) {
      checkinTitle.textContent =
        t.checkinTitle;
    }

    if (checkinMessage) {
      checkinMessage.textContent =
        t.checkinMessage;
    }

    if (feelingInput) {
      feelingInput.placeholder =
        t.feelingPlaceholder;
    }

  });

}


/* =========================================================
   CHECK-IN CONTINUE BUTTON
   ========================================================= */

if (continueButton) {

  continueButton.addEventListener("click", function () {

    const feeling =
      feelingInput
        ? feelingInput.value.trim()
        : "";

    const language =
      getLanguage();

    const t =
      translations[language] || translations.en;


    /* EMPTY FEELING */

    if (feeling === "") {

      alert(t.emptyFeeling);

      if (feelingInput) {
        feelingInput.focus();
      }

      return;
    }


    /* SAVE FEELING */

    localStorage.setItem(
      "lifeResetFeeling",
      feeling
    );


    const text =
      feeling.toLowerCase();


    /* =====================================================
       URGENT WORDS
       ===================================================== */

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


    /* =====================================================
       DOWN WORDS
       ===================================================== */

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


    /* =====================================================
       HAPPY WORDS
       ===================================================== */

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


    /* =====================================================
       DETECT FEELING
       ===================================================== */

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


    /* =====================================================
       ROUTE USER
       ===================================================== */

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


/* =========================================================
   MICROPHONE VOICE INPUT
   ========================================================= */

if (micButton && feelingInput) {

  const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;


  /* BROWSER DOES NOT SUPPORT SPEECH */

  if (!SpeechRecognition) {

    micButton.style.display = "none";

  }

  else {

    const recognition =
      new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;


    /* MICROPHONE CLICK */

    micButton.addEventListener("click", function () {

      const language = getLanguage();


      if (language === "es") {

        recognition.lang = "es-ES";

      }

      else if (language === "fr") {

        recognition.lang = "fr-FR";

      }

      else if (language === "ht") {

        recognition.lang = "ht-HT";

      }

      else {

        recognition.lang = "en-US";

      }


      try {

        recognition.start();

        micButton.textContent = "🔴";

      }

      catch (error) {

        console.log(
          "Microphone is already active."
        );

      }

    });


    /* SPEECH RESULT */

    recognition.onresult =
      function (event) {

        const spokenText =
          event.results[0][0].transcript;

        if (feelingInput.value) {

          feelingInput.value +=
            " " + spokenText;

        }

        else {

          feelingInput.value =
            spokenText;

        }

        micButton.textContent = "🎙️";

      };


    /* SPEECH ERROR */

    recognition.onerror =
      function () {

        micButton.textContent = "🎙️";

      };


    /* SPEECH END */

    recognition.onend =
      function () {

        micButton.textContent = "🎙️";

      };

  }

}


/* =========================================================
   RETURN TO CHECK-IN
   ========================================================= */

const returnToCheckin =
  localStorage.getItem(
    "lifeResetReturnToCheckin"
  );


if (returnToCheckin === "true") {

  if (setupSection) {
    setupSection.style.display = "none";
  }

  if (welcomeSection) {
    welcomeSection.style.display = "none";
  }

  if (checkinSection) {
    checkinSection.style.display = "block";
  }

  localStorage.removeItem(
    "lifeResetReturnToCheckin"
  );

}


/* =========================================================
   LOAD SAVED USER
   ========================================================= */

const savedName =
  localStorage.getItem("lifeResetName");

const savedLanguage =
  localStorage.getItem("lifeResetLanguage");


if (savedLanguage && translations[savedLanguage]) {

  applyLanguage(savedLanguage);

}


/* =========================================================
   END OF LIFERESET APP
   ========================================================= */
