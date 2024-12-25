export class GameDetails {
  constructor(fullGameSection, gamesDetailsSection, gameContent) {
    this.fullGameSection = fullGameSection;
    this.gamesDetailsSection = gamesDetailsSection;
    this.gameContent = gameContent;
  }

  // Method to fetch game details by ID
  async fetchDetails(gameId) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cee042a8bemshcef5a8fb6793c9ep171ffcjsn80eed227df71",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // Method to display game details in the UI
  showGameDetails(gameDetails) {
    this.fullGameSection.classList.add("d-none");
    this.gamesDetailsSection.classList.remove("d-none");

    this.gameContent.innerHTML = `
        <div class="col-md-4">
            <img class="w-100" src="${gameDetails.thumbnail}" alt="thumbnail" />
        </div>
        <div class="col-md-8">
            <h3>Title: ${gameDetails.title}</h3>
            <p>Category: <span class="badge text-bg-info">${gameDetails.genre}</span></p>
            <p>Platform: <span class="badge text-bg-info">${gameDetails.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${gameDetails.status}</span></p>
            <p class="small">${gameDetails.description}</p>
            <a href="${gameDetails.game_url}" target="_blank" class="btn btn-outline-warning">Show Game</a>
        </div>
      `;
  }
}
