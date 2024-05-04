document.getElementById("drawButton").addEventListener("click", function() {
  const suits = ["♥", "♦", "♣", "♠"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const card = document.querySelector(".card");
  const rankElement = document.querySelector(".rank");
  const suitElements = document.querySelectorAll(".suit");

  const suit = suits[Math.floor(Math.random() * suits.length)];
  const cardRank = ranks[Math.floor(Math.random() * ranks.length)];

  rankElement.textContent = cardRank;
  suitElements.forEach(element => {
    element.textContent = suit;
    element.style.color = suit === "♥" || suit === "♦" ? "red" : "black";
  });
});
