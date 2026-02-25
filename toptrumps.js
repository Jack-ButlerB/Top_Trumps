export class topTrumpCard {
  constructor(id, name, strength, power, ttrating, health) {
    this.strengthMaxValue = 75;
    this.powerMaxValue = 50;
    this.ttratingMaxValue = 100;
    this.healthMaxValue = 40;

    this.id = id;
    this.name = name;
    this.strength = this.handleReceivedValue(strength, this.strengthMaxValue);
    this.power = this.handleReceivedValue(power, this.powerMaxValue);
    this.ttrating = this.handleReceivedValue(ttrating, this.ttratingMaxValue);
    this.health = this.handleReceivedValue(health, this.healthMaxValue);
  }
  handleReceivedValue(value, maxValue) {
    if (value > maxValue) {
      value = maxValue;
    }
    return value;
  }

  relativeValue(value, maxValue) {
    return value / maxValue;
  }

  getBestCategories() {
    const strength = this.relativeValue(this.strength, this.strengthMaxValue);
    const power = this.relativeValue(this.power, this.powerMaxValue);
    const ttrating = this.relativeValue(this.ttrating, this.ttratingMaxValue);
    const health = this.relativeValue(this.health, this.healthMaxValue);

    const bestCategoriesArray = [];

    const winner = Math.max(strength, power, ttrating, health);

    if (winner == strength) {
      bestCategoriesArray.push("strength");
    }
    if (winner == power) {
      bestCategoriesArray.push("power");
    }
    if (winner == ttrating) {
      bestCategoriesArray.push("ttrating");
    }
    if (winner == health) {
      bestCategoriesArray.push("health");
    }

    const bestCategory = bestCategoriesArray[0];
    // Math.round(Math.random()) * bestCategoriesArray.length

    return bestCategory;
  }
}

export function deal(deckArray) {
  deckArray.sort(shuffle);

  console.log("shuffled deck before function", deckArray.sort(shuffle));

  function shuffle(a, b) {
    return 0.5 - Math.random();
  }

  console.log("shuffled deck after function", deckArray.sort(shuffle));

  const player1Deck = [];
  const player2Deck = [];

  for (let i = 0; i < deckArray.length; i++) {
    if (i == 0 || i % 2 == 0) {
      player2Deck.push(deckArray[i]);
    } else {
      player1Deck.push(deckArray[i]);
    }
  }
  return {
    deck1: player1Deck,
    deck2: player2Deck,
  };
}

// Chosing winner of each round
export function compare(player1Catergory, player2Catergory) {
  if (player1Catergory > player2Catergory) {
    return "Player 1";
  } else if (player2Catergory > player1Catergory) {
    return "Player 2";
  } else {
    return "Draw";
  }
}

export function playGame(player1DeckAA, player2DeckAA) {
  let roundWinner = "";
  const roundWinnnerLog = [];
  for (let i = 0; i < 20; i++) {
    if (roundWinner == "" || roundWinner == "Player 1") {
      console.log("player1s card", player1DeckAA[0]);
      const roundCatergory = player1DeckAA[0].getBestCategories();
      console.log("Round Category player1", i, ":", roundCatergory);
      const player1Number = player1DeckAA[0][roundCatergory];
      console.log("player1Number for round", i, ":", player1Number);
      const player2Number = player2DeckAA[0][roundCatergory];
      console.log("player2Number for round", i, ":", player2Number);

      roundWinner = compare(player1Number, player2Number);
      console.log("roundWinner for round", i, ":", roundWinner);
      roundWinnnerLog.push(roundWinner);
    } else {
      const roundCatergory = player2DeckAA[0].getBestCategories();
      console.log("Round Category player 2", i, ":", roundCatergory);

      const player1Number = player1DeckAA[0][roundCatergory];
      console.log("player1Number for round", i, ":", player1Number);

      const player2Number = player2DeckAA[0][roundCatergory];
      console.log("player2Number for round", i, ":", player2Number);

      roundWinner = compare(player1Number, player2Number);
      console.log("roundWinner for round", i, ":", roundWinner);
      roundWinnnerLog.push(roundWinner);
    }
    if (roundWinner == "Player 1") {
      // player1DeckAA.splice(player1DeckAA.length, 0, player2DeckAA[i]);
      player1DeckAA.push(player2DeckAA[0]);
      player2DeckAA.splice(0, 1);
      player1DeckAA.push(player1DeckAA[0]);
      player1DeckAA.splice(0, 1);
      console.log(
        "new player 1 deck with added card at the end",
        player1DeckAA
      );
      console.log("new player 2 deck with card removed", player2DeckAA);
    } else if (roundWinner == "Player 2") {
      player2DeckAA.push(player1DeckAA[0]);
      player1DeckAA.splice(0, 1);
      player2DeckAA.push(player2DeckAA[0]);
      player2DeckAA.splice(0, 1);
      console.log("new player 1 deck with card removed", player1DeckAA);

      console.log(
        "new player 2 deck with added card at the end",
        player2DeckAA
      );
    } else {
      player1DeckAA.push(player1DeckAA[0]);
      player1DeckAA.slice(0, 1);
      player2DeckAA.push(player2DeckAA[0]);
      player2DeckAA.slice(0, 1);
      console.log("new player 1 deck with card removed", player1DeckAA);

      console.log(
        "new player 2 deck with added card at the end",
        player2DeckAA
      );
    }
  }
  return roundWinnnerLog;
}
