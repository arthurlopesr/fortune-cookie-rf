const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const wholeCookie = document.querySelector("#wholeCookie");
const tryAgain = document.querySelector("#tryAgain");

const phrases = [
  "É parte da cura o desejo de ser curado.",
  "O cão não ladra por valentia e sim por medo.",
  "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
  "A palavra é prata, o silêncio é ouro.",
  "A persistência realiza o impossível.",
  "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "O que me preocupa não é o grito dos maus. É o silêncio dos bons.",
];

// Events
wholeCookie.addEventListener("click", handleTryClick);
tryAgain.addEventListener("click", handleResetClick);
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && screen2.classList.contains("hide")) {
    handleTryClick();
  } else if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});

// Callback function to execute other functions
function handleTryClick() {
  toggleScreens();
  selectRandomPhrase();
}

function handleResetClick() {
  toggleScreens();
}

// Select a random phrase from the array and display it on screen2
function selectRandomPhrase() {
  const numberOfPhrases = phrases.length;
  const randomIndex = Math.floor(Math.random() * numberOfPhrases);
  screen2.querySelector("h2").innerText = phrases[randomIndex];
}

// Toggle between screen1 and screen2
function toggleScreens() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}