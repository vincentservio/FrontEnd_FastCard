const loadData = () => {
  fetch("http://localhost:3001/decks")
    .then((resp) => resp.json())
    .then((decks) => {
      debugger;
      decks.forEach((deck) => {
        const main = document.getElementById("main");
        debugger;

        main.innerHTML += `
<h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>

<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">${deck.name}</div>
    <div class="card__face card__face--back">back</div>
  </div>
</div>
 `;
        var card = document.querySelector(".card");
        card.addEventListener("click", function () {
          card.classList.toggle("is-flipped");
        });
      });
    });
};
const chooseDeck = () => {
  const main = document.getElementById("main");

  main.innerHTML += `
<h1>Card Flip with Text</h1>
<h3>Hover over the image below:</h3>

<div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back">back</div>
  </div>
</div>
 `;
  var card = document.querySelector(".card");
  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
};
chooseDeck();
loadData();
