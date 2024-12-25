export class Games {
  constructor(cardsContainer, showSpinner, hideSpinner) {
    this.cardsContainer = cardsContainer;
    this.showSpinner = showSpinner;
    this.hideSpinner = hideSpinner;
  }

  // Method to fetch games from API
  async fetchGames(categ = "mmorpg") {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "cee042a8bemshcef5a8fb6793c9ep171ffcjsn80eed227df71",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`;
    try {
      const response = await fetch(url, options);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }

  // Method to display games in the DOM
  async displayGames(categ) {
    this.showSpinner();
    const games = await this.fetchGames(categ);
    let cartona = "";

    games.forEach((game) => {
      cartona += `
        <div class="col-lg-3 col-md-4 col-sm-6">
          <div class="card px-3 pt-3 bg-transparent d-flex flex-column" data-id="${
            game.id
          }">
            <img src="${game.thumbnail}" class="card-img-top" alt="game" />
            <div class="card-body px-0">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="card-title">${game.title
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}</h5>
                <span class="badge p-2 bg-primary">Free</span>
              </div>
              <p class="card-text small text-center opacity-50">
                ${game.short_description.split(" ").slice(0, 10).join(" ")}
              </p>
            </div>
            <div class="card-footer px-0 d-flex justify-content-between align-items-center">
              <span>${game.genre}</span>
              <span>${game.platform}</span>
            </div>
          </div>
        </div>
        `;
    });

    this.cardsContainer.innerHTML = cartona;
    this.hideSpinner();
  }
}
