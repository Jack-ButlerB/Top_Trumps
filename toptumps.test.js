import { describe, test, expect } from "vitest";
import {
  topTrumpCard,
  createDeck,
  deal,
  shuffle,
  compare,
  playGame,
  forIf,
} from "./toptrumps";

describe("just below max values", () => {
  const card1 = new topTrumpCard(1, "card1", 74, 49, 99, 39);
  console.log("below max values", card1);

  test("card1 strength is equal to 74", () => {
    expect(card1.strength).toEqual(74);
  });
  test("card1 power is equal to 49", () => {
    expect(card1.power).toEqual(49);
  });
  test("card1 ttrating is equal to 99", () => {
    expect(card1.ttrating).toEqual(99);
  });
  test("card1 strength is equal to 39", () => {
    expect(card1.heatlh).toEqual(39);
  });
});
describe("Equal to max values", () => {
  const card1 = new topTrumpCard(1, "card1", 75, 50, 100, 40);
  console.log(card1);
  test("card1 strength is equal to 75", () => {
    expect(card1.strength).toEqual(75);
  });
  test("card1 power is equal to 50", () => {
    expect(card1.power).toEqual(50);
  });
  test("card1 ttrating is equal to 100", () => {
    expect(card1.ttrating).toEqual(100);
  });
  test("card1 strength is equal to 75", () => {
    expect(card1.heatlh).toEqual(40);
  });
});
describe("above max values", () => {
  const card1 = new topTrumpCard(1, "card1", 76, 51, 101, 41);
  test("card1 strength is equal to 75", () => {
    expect(card1.strength).toEqual(75);
  });
  test("card1 power is equal to 50", () => {
    expect(card1.power).toEqual(50);
  });
  test("card1 ttrating is equal to 100", () => {
    expect(card1.ttrating).toEqual(100);
  });
  test("card1 strength is equal to 75", () => {
    expect(card1.heatlh).toEqual(40);
  });
});
describe("strength is highest", () => {
  const card1 = new topTrumpCard(1, "card1", 75, 25, 50, 20);
  console.log(card1);
  test("card1 strength is equal to 75", () => {
    expect(card1.strength).toEqual(75);
  });
  test("card1 power is equal to 25", () => {
    expect(card1.power).toEqual(25);
  });
  test("card1 ttrating is equal to 50", () => {
    expect(card1.ttrating).toEqual(50);
  });
  test("card1 health is equal to 20", () => {
    expect(card1.heatlh).toEqual(20);
  });
  test("card1 getBestCategories is equal to `strength`", () => {
    expect(card1.getBestCategories()).toEqual("strength");
  });
  console.log(card1.getBestCategories());
});

// describe("hard coded card testing", () => {
//   test("Cat card will have id of 1", () => {
//     expect(animal1.id).toEqual(1);
//   });
//   test("Dog card will have id of 2", () => {
//     expect(animal2.id).toEqual(2);
//   });
//   test("animal3", () => {
//     expect(animal3.id).toEqual(3);
//   });

//   test("shuffling deck1 will make the card appear in a random order", () => {
//     expect(shuffle()).toEqual();
//   });
// });
// describe("Function deal in relation to 2 hard coded cards", () => {
//   test("Passing animalDeckOf2 into deal to create 2 variables ", () => {
//     expect(deal(createDeck())).toEqual([]);
//   });
// });

describe("Awesome Animals Hard coded deck", () => {
  const awesomeAnimalsDeck = [
    new topTrumpCard(0, "Spider", 10, 35, 50, 10),
    new topTrumpCard(1, "Eagle", 50, 50, 75, 30),
    new topTrumpCard(2, "Shark", 75, 50, 90, 35),
    new topTrumpCard(3, "Praying Mantis", 20, 10, 70, 10),
    new topTrumpCard(4, "Hippopotamus", 75, 150, 80, 40),
    new topTrumpCard(5, "Snake", 30, 40, 50, 25),
    new topTrumpCard(6, "Cheetah", 60, 40, 90, 30),
    new topTrumpCard(7, "Bear", 70, 50, 70, 40),
    new topTrumpCard(8, "Polar Bear", 75, 50, 80, 40),
    new topTrumpCard(9, "Fox", 30, 30, 1, 10),
    new topTrumpCard(10, "Scorpion", 10, 30, 40, 15),
    new topTrumpCard(11, "Owl", 15, 30, 65, 20),
    new topTrumpCard(12, "Tiger", 60, 40, 90, 30),
    new topTrumpCard(13, "Eagle", 50, 50, 75, 30),
    new topTrumpCard(14, "Shark", 75, 50, 90, 35),
    new topTrumpCard(15, "Praying Mantis", 20, 10, 70, 10),
    new topTrumpCard(16, "Hippopotamus", 75, 150, 80, 40),
    new topTrumpCard(17, "Snake", 30, 40, 50, 25),
    // new topTrumpCard(18, "Cheetah", 60, 40, 90, 30),
    // new topTrumpCard(19, "Bear", 70, 50, 70, 40),
    new topTrumpCard(20, "Polar Bear", 75, 50, 80, 40),
    new topTrumpCard(21, "Fox", 30, 30, 1, 10),
    new topTrumpCard(22, "Scorpion", 10, 30, 40, 15),
    new topTrumpCard(23, "Owl", 15, 30, 65, 20),
    new topTrumpCard(24, "Hippopotamus", 75, 150, 80, 40),
    new topTrumpCard(25, "Snake", 30, 40, 50, 25),
    // new topTrumpCard(26, "Cheetah", 10, 10, 10, 10),
    // new topTrumpCard(27, "Bear", 70, 50, 70, 40),
    new topTrumpCard(28, "Polar Bear", 75, 50, 80, 40),
    new topTrumpCard(29, "Fox", 30, 30, 1, 10),
  ];

  console.log(awesomeAnimalsDeck[7]);

  test("testing why these are underfined", () => {
    expect(awesomeAnimalsDeck[19].getBestCategories()).toEqual("strength");
  });

  // test("putting Awesome animals through deal", () => {
  //   expect(deal(awesomeAnimalsDeck)).toEqual();
  // });

  const dealtAwesomeAnimalsDeck = deal(awesomeAnimalsDeck);
  const player1DeckAA = dealtAwesomeAnimalsDeck.deck1;
  const player2DeckAA = dealtAwesomeAnimalsDeck.deck2;

  // test("when playGame is run, withouot for loop, roundWinner should equal list of winning numbers", () => {
  //   expect(playGame(player1DeckAA, player2DeckAA).roundWinnnerLog).toEqual([
  //     1, 2, 2, 2, 0, 1,
  //   ]);
  // });

  const gameResults = playGame(player1DeckAA, player2DeckAA);
  console.log("game results third round:", gameResults[2]);
  function gameResultsWinner() {
    let player1Count = 0;
    let player2Count = 0;
    for (let i = 0; i < gameResults.length; i++) {
      console.log(gameResults[i]);
      if (gameResults[i] == 1) {
        player1Count = player1Count + 1;
        console.log("player1Count = ", player1Count);
      } else if (gameResults[i] == 2) {
        player2Count = player2Count + 1;
        console.log("player2Count = ", player2Count);
      } else {
      }
    }

    if (player1Count > player2Count) return "Player 1 Wins";
    else return "Player 2 Wins";
  }
  test("player1Count should equal 2", () => {
    expect(gameResultsWinner()).toEqual(2);
  });

  // test("player1Count should equal 2", () => {
  //   expect(player1Count).toEqual(2);
  // });
});
//   test("player2deck first card has an ID of 0", () => {
//     expect(player2DeckAA[0].id).toEqual(0);
//   });

//   const player1DeckAAFirstGoCatergory = player1DeckAA[0].getBestCategories();

//   test("player1Deck best catergory to be power", () => {
//     expect(player1DeckAAFirstGoCatergory).toEqual("power");
//   });

//   const player1DeckAAFirstGo = player1DeckAA[0][player1DeckAAFirstGoCatergory];

//   const player2DeckAAFirstGo = player2DeckAA[0][player1DeckAAFirstGoCatergory];

//   test("player1DeckAA[0] best catergory should win over that category on player2DeckAA[0]", () => {
//     expect(compare(player1DeckAAFirstGo, player2DeckAAFirstGo)).toEqual(
//       "player1"
//     );
//   });

//   test("the best catergory of player1 is power, it should equal 35 for player2DeckAA[0]", () => {
//     expect(player2DeckAAFirstGo).toEqual(35);
//   });

//   });

//   // console.log("roundWinner = ", roundWinner);
//   // console.log("roundWinnerLog = ", roundWinnnerLog);

// test("returned number log should be 1,2,1,2", () => {
//   expect(forIf()).toEqual([0, 10, 2, 30]);
// });
