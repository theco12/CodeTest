// Language resources
// var translations = {
//   en: {
//     title: "Hello!",
//     description: "Click me",
//     test: "test",
//   },
//   es: {
//     title: "¡Hola!",
//     description: "Haz clic",
//     test: "prueba",
//   },
//   ko: {
//     title: "안녕하세요!",
//     description: "눌러주세요",
//     test: "테스트",
//   },
// };

// Function to set translated text
function setTranslatedText(language) {
  let translation = translations[language] || translations["ko"]; // Default to English if language not found

  document.getElementById("title").textContent = translation.title;
  document.getElementById("description").textContent = translation.description;
  document.getElementById("test").textContent = translation.test;
}

// Example usage
// var userLanguage = navigator.language || navigator.userLanguage;
// setTranslatedText(userLanguage);
