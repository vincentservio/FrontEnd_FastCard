window.addEventListener("load", () => {
  getDecks();
});

const getDecks = () => {
  fetch("http://localhost:3001/decks")
    .then((resp) => resp.json())
    .then((decks) => {
      // debugger;
      decks.forEach((deck) => {
        const main = document.getElementById("main");
        let dk = new Deck(deck);
        // attachClickToLinks()
        // debugger;
        main.innerHTML += dk.renderDeck();
      });
      attachClickToDeck();
      // var card = document.querySelector(".card");
      // card.addEventListener("click", function () {
      //   card.classList.toggle("is-flipped");
      // });
    });
};

const chooseDeck = () => {
  const main = document.getElementById("main");

  main.innerHTML += `
<h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>


  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back">back</div>

</div>
 `;
  var card = document.querySelector(".card");
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
};

class Deck {
  constructor(deck) {
    this.id = deck.id;
    this.category = deck.category;
    Deck.decks << this;
  }

  renderDeck() {
    return `
       <li class="decks">
        <a href="#" class="deck"data-id="${this.id}">${this.category}</a>
    </li>
    <br>
    `;
  }
}

Deck.decks = [];
// chooseDeck();
// loadData();
