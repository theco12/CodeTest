// Language resources
var translationsIndex = {
  en: {
    title: "Hello!",
    description: "Click me",
    test: "test",
  },
};

// Language resources
var translationsLogin = {
  en: {
    name: "name",
    login: "login",
    sign: "sign up",
  },
};

// Function to set translated text
function setTranslatedText(language) {
  let translation = translationsIndex[language] || translationsIndex["ko"];
  document.getElementById("title").textContent = translation.title;
  document.getElementById("description").textContent = translation.description;
  document.getElementById("test").textContent = translation.test;
}

function setTranslatedTextLogin(language) {
  let translation = translationsLogin[language] || translationsLogin["ko"];
  document.getElementById("name").textContent = translation.name;
  document.getElementById("login").textContent = translation.login;
  document.getElementById("sign").textContent = translation.sign;
}
