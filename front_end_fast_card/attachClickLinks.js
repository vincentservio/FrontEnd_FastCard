const attachClickToDeck = () => {
  let cards = document.getElementsByClassName("deck");
  debugger;
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      viewCard();
    });
  });
};

const viewCard = () => {
  debugger;
};
