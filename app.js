let languageMenu = document.getElementById("languageMenu");

function language() {
  if (languageMenu.style.display == "block") {
    languageMenu.style.display = "none";
  } else {
    languageMenu.style.display = "block";
  }
}

function changeLanguageBtn() {
  let ko = document.getElementById("ko");
  let en = document.getElementById("en");
  let es = document.getElementById("es");

  ko.addEventListener("click", () => {
    selectedLanguage = "ko";
    sessionStorage.setItem("language", selectedLanguage);
    changeLanguage(selectedLanguage);
  });

  en.addEventListener("click", () => {
    selectedLanguage = "en";
    sessionStorage.setItem("language", selectedLanguage);
    changeLanguage(selectedLanguage);
  });

  es.addEventListener("click", () => {
    selectedLanguage = "es";
    sessionStorage.setItem("language", selectedLanguage);
    changeLanguage(selectedLanguage);
  });
}
