import { topTrumpCard, deal, playGame } from "./toptrumps.js";

// (() => {})();

// event listeners below
const body = document.getElementById("body");
const logo = document.getElementById("topTrumpsBox");
const button = document.getElementById("dealMeIn");
const decks = document.getElementById("listOfDecks");
button.onclick = function () {
  button.style.display = "none";
  decks.style.display = "flex";
  logo.style.width = "123.5px";
  logo.style.height = "175px";
  logo.style.marginTop = "10px";
};

const aaDeckButton = document.getElementById("awesomeAnimals");
const players = document.getElementById("players");
const playersGirlImg = document.getElementById("playersGirlImg");
const playersBoyImg = document.getElementById("playersBoyImg");
const playButton = document.getElementById("playButton");

aaDeckButton.onclick = function () {
  decks.style.display = "none";
  players.style.display = "flex";
  logo.style.marginBottom = "-100px";
  playButton.style.display = "inline";
  const awesomeAnimalsDeck = [
    // new topTrumpCard(0, "Spider", 10, 35, 50, 10),
    // new topTrumpCard(1, "Eagle", 50, 40, 75, 40),
    // new topTrumpCard(2, "Shark", 75, 50, 90, 35),
    // new topTrumpCard(3, "Praying Mantis", 20, 10, 70, 10),
    // new topTrumpCard(4, "Hippopotamus", 75, 150, 80, 40),
    // new topTrumpCard(5, "Snake", 30, 40, 50, 25),
    // new topTrumpCard(6, "Cheetah", 60, 40, 90, 30),
    // new topTrumpCard(7, "Bear", 70, 50, 70, 40),
    // new topTrumpCard(8, "Polar Bear", 75, 50, 80, 40),
    // new topTrumpCard(9, "Fox", 30, 30, 1, 10),
    new topTrumpCard(11, "Owl", 15, 30, 65, 20),
    new topTrumpCard(10, "Scorpion", 10, 30, 40, 15),
    new topTrumpCard(12, "Tiger", 60, 40, 90, 30),
    new topTrumpCard(13, "Lion", 50, 50, 75, 30),
    new topTrumpCard(14, "Bull", 75, 50, 90, 35),
    new topTrumpCard(15, "Eel", 20, 10, 70, 10),
    new topTrumpCard(16, "Elephant", 75, 150, 80, 40),
    new topTrumpCard(17, "Dog", 30, 40, 50, 25),
    new topTrumpCard(18, "Hamster", 10, 10, 10, 10),
    new topTrumpCard(19, "Elk", 70, 50, 70, 40),
    new topTrumpCard(20, "Giraffe", 75, 50, 80, 40),
    new topTrumpCard(21, "Cat", 30, 30, 1, 10),
    new topTrumpCard(22, "Deer", 10, 30, 40, 15),
    new topTrumpCard(23, "Porcupine", 15, 30, 65, 20),
    new topTrumpCard(24, "Orangutan", 75, 150, 80, 40),
    new topTrumpCard(25, "Badger", 30, 40, 50, 25),
    new topTrumpCard(26, "Puma", 10, 10, 10, 10),
    new topTrumpCard(27, "Moose", 70, 50, 70, 40),
    new topTrumpCard(28, "Arctic Wolf", 75, 50, 80, 40),
    new topTrumpCard(29, "Rabbit", 30, 30, 1, 10),
  ];

  console.log(awesomeAnimalsDeck);
  const dealtAwesomeAnimalsDeck = deal(awesomeAnimalsDeck);
  console.log("Deal:", dealtAwesomeAnimalsDeck);

  const player1DeckAA = dealtAwesomeAnimalsDeck.deck1;
  const player2DeckAA = dealtAwesomeAnimalsDeck.deck2;

  const gameResults = playGame(player1DeckAA, player2DeckAA);

  function gameLog(results) {
    const log = [];
    for (let i = 0; i < results.length; i++) {
      const j = i + 1;
      const string = `<p>Round ${j} Winner = ${results[i]}</p>`;
      log.push(string);
    }
    // This turns it into one string!
    const logJoined = log.join("");
    return logJoined;
  }

  console.log("game results first round:", gameResults[0]);

  function gameResultsWinner() {
    let player1Count = 0;
    let player2Count = 0;
    for (let i = 0; i < gameResults.length; i++) {
      console.log(gameResults[i]);
      if (gameResults[i] == "Player 1") {
        player1Count = player1Count + 1;
        console.log("player1Count = ", player1Count);
      } else if (gameResults[i] == "Player 2") {
        player2Count = player2Count + 1;
        console.log("player2Count = ", player2Count);
      } else {
      }
    }

    if (player1Count > player2Count) return "Player 1 Wins";
    else if (player2Count > player1Count) return "Player 2 Wins";
    else return "Draw";
  }

  const winnerAndLog = document.getElementById("winnerAndLog");
  playButton.onclick = function () {
    playButton.style.display = "none";
    playersGirlImg.style.marginLeft = "-50px";
    playersBoyImg.style.marginRight = "-100px";
    winnerAndLog.style.display = "inline";
    // const playButtonBox = document.getElementById(playButtonBox);
    // // playButtonBox.style.marginLeft = "-50px";

    const log = document.getElementById("log");
    log.innerHTML = gameLog(gameResults);

    const winnerDisplay = document.getElementById("winner");
    console.log(gameResultsWinner());
    if (gameResultsWinner() == "Player 1 Wins") {
      winnerDisplay.innerHTML = "Player 1 Wins";
    } else if (gameResultsWinner() == "Player 2 Wins") {
      winnerDisplay.innerHTML = "Player 2 Wins";
    } else winnerDisplay.innerHTML = "Draw";
  };
};
