const viewCard = () => {
  clearForm();
  clearUls();
  let showcard = document.getElementById("showcard");
  let id = event.target.dataset.id;
  console.log(Deck.decks);

  fetch(BASE_URL + "/decks/" + id)
    .then((resp) => resp.json())
    .then((deck) => {
      if (deck.cards.length == 0) {
        createCardBtn();
        attachClickToLinks();
      } else {
        let random = Math.floor(Math.random() * deck.cards.length);
        let card = deck.cards[random];
        let cd = new Card(card);
        showcard.innerHTML += cd.renderCard();
        createCardBtn();

        changeCard();
        attachClickToLinks();
      }
    });
};
