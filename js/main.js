import { Games } from "./games.js";
import { GameDetails } from "./gameDetails.js";

const cardsContainer = document.querySelector(".row");
const navLinks = document.querySelectorAll(".nav-link");
const loadingSpinner = document.getElementById("loading-spinner");

const mmorpgBtn = document.getElementById("mmorpgBtn");
const shooterBtn = document.getElementById("shooterBtn");
const sailingBtn = document.getElementById("sailingBtn");
const permadeathBtn = document.getElementById("permadeathBtn");
const superheroBtn = document.getElementById("superheroBtn");
const pixelBtn = document.getElementById("pixelBtn");
const closeBtn = document.querySelector(".btn-close");

const fullGameSection = document.querySelector(".full-games");
const gamesDetailsSection = document.querySelector(".game-details");
const gameContent = document.querySelector(".game-content");

// Initialize the Games and GameDetails classes
const games = new Games(cardsContainer, showSpinner, hideSpinner);
const gameDetails = new GameDetails(
  fullGameSection,
  gamesDetailsSection,
  gameContent
);

// Function to show the spinner
function showSpinner() {
  loadingSpinner.classList.remove("d-none");
}

// Function to hide the spinner
function hideSpinner() {
  loadingSpinner.classList.add("d-none");
}

// Load and display games on page load
window.addEventListener("load", () => {
  showSpinner();
  games.displayGames("mmorpg");
});

// Event listeners for category selection
mmorpgBtn.addEventListener("click", (e) => {
  games.displayGames("mmorpg");
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
});

shooterBtn.addEventListener("click", (e) => {
  games.displayGames("shooter");
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
});

sailingBtn.addEventListener("click", (e) => {
  games.displayGames("sailing");
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
});

permadeathBtn.addEventListener("click", (e) => {
  games.displayGames("permadeath");
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
});

superheroBtn.addEventListener("click", (e) => {
  games.displayGames("superhero");
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
});

pixelBtn.addEventListener("click", (e) => {
  games.displayGames("pixel");
  navLinks.forEach((link) => link.classList.remove("active"));
  e.target.classList.add("active");
});

// Close game details section and return to the games list
closeBtn.addEventListener("click", () => {
  gamesDetailsSection.classList.add("d-none");
  fullGameSection.classList.remove("d-none");
});

// Click handler for game cards
cardsContainer.addEventListener("click", async (e) => {
  if (e.target.closest(".card")) {
    const gameId = e.target.closest(".card").getAttribute("data-id");
    const gameDetailsData = await gameDetails.fetchDetails(gameId);
    gameDetails.showGameDetails(gameDetailsData);
  }
});
