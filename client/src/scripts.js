const flagsElement = document.getElementById("flags"); // Corrección: document.getElementById en lugar de documentById

const textToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`../src/language/${language}.json`);
  const text = await requestJson.json();

  textToChange.forEach((element) => {
    // Corrección: Usar forEach en lugar de for...of para textToChange
    const section = element.dataset.section;
    const value = element.dataset.value;

    element.innerHTML = text[section][value];
  });
};

flagsElement.addEventListener("click", (e) => {
  // Corrección: Usar addEventListener en lugar de = para flagsElement
  changeLanguage(e.target.parentElement.dataset.language);
});
