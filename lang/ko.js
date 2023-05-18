// Language resources
var translationsIndex = {
  ko: {
    title: "안녕하세요!",
    description: "눌러주세요",
    test: "테스트",
  },
};

// Language resources
var translationsLogin = {
  ko: {
    name: "이름",
    login: "로그인",
    sign: "회원가입",
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
