const run = document.getElementById("run");
const button = document.getElementById("button");

run.onclick = function () {
  run.style.display = "none";
  button.style.display = "flex";
  const body = document.body;
  body.onload = addCard1();
  function addCard1() {
    const card = document.createElement("div");
    card.setAttribute("id", "card1");
    card.setAttribute("class", "card");
    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("id", "card-header");
    const cardName = document.createElement("h1");
    cardName.setAttribute("id", "card-name");
    const textTest = "Not Monkey";
    cardName.appendChild(document.createTextNode(textTest));
    // cardName.innerHTML("textTest");
    const cardLogo = document.createElement("img");
    cardLogo.setAttribute("id", "cardLogo");
    cardLogo.src = "./images/TopTrumps.png";
    cardHeader.appendChild(cardName);
    cardHeader.appendChild(cardLogo);
    card.appendChild(cardHeader);

    const cardContents = document.createElement("div");
    cardContents.setAttribute("id", "card-contents");
    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("id", "card-info");
    const para = document.createElement("p");
    para.appendChild(
      document.createTextNode(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque quasi, animi autem labore dolorum consequuntur eum dolorem ex perferendis error hic, dolor, nisi distinctio soluta voluptatum qui nulla tenetur."
      )
    );
    cardInfo.appendChild(para);
    cardContents.appendChild(cardInfo);
    const cardScores = document.createElement("div");
    cardScores.setAttribute("id", "card-scores");
    const p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("Strength: 50"));
    const p2 = document.createElement("p");
    p2.appendChild(document.createTextNode("Power: 80"));
    const p3 = document.createElement("p");
    p3.appendChild(document.createTextNode("TopTrump Rating: 90"));
    const p4 = document.createElement("p");
    p4.appendChild = document.createTextNode("Health: 40");

    cardScores.appendChild(p1);
    cardScores.appendChild(p2);
    cardScores.appendChild(p3);
    cardScores.appendChild(p4);
    cardContents.appendChild(cardScores);
    card.appendChild(cardContents);
    body.appendChild(card);

    // const currentDiv = document.getElementById("card-contents");
    // card.insertBefore(cardHeader, currentDiv);
  }
  body.onload = addCard2();

  function addCard2() {
    const card = document.createElement("div");
    card.setAttribute("id", "card2");
    card.setAttribute("class", "card");
    const cardHeader = document.createElement("div");
    cardHeader.setAttribute("id", "card-header");
    const cardName = document.createElement("h1");
    cardName.setAttribute("id", "card-name");
    cardName.appendChild(document.createTextNode("Monkey"));
    const cardLogo = document.createElement("img");
    cardLogo.setAttribute("id", "cardLogo");
    cardLogo.src = "./images/TopTrumps.png";
    cardHeader.appendChild(cardName);
    cardHeader.appendChild(cardLogo);
    card.appendChild(cardHeader);

    const cardContents = document.createElement("div");
    cardContents.setAttribute("id", "card-contents");
    const cardInfo = document.createElement("div");
    cardInfo.setAttribute("id", "card-info");
    const para = document.createElement("p");
    para.appendChild(
      document.createTextNode(
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eaque quasi, animi autem labore dolorum consequuntur eum dolorem ex perferendis error hic, dolor, nisi distinctio soluta voluptatum qui nulla tenetur."
      )
    );
    cardInfo.appendChild(para);
    cardContents.appendChild(cardInfo);
    const cardScores = document.createElement("div");
    cardScores.setAttribute("id", "card-scores");
    const p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("Strength: 50"));
    const p2 = document.createElement("p");
    p2.appendChild(document.createTextNode("Power: 80"));
    const p3 = document.createElement("p");
    p3.appendChild(document.createTextNode("TopTrump Rating: 90"));
    const p4 = document.createElement("p");
    p4.appendChild = document.createTextNode("Health: 40");

    cardScores.appendChild(p1);
    cardScores.appendChild(p2);
    cardScores.appendChild(p3);
    cardScores.appendChild(p4);
    cardContents.appendChild(cardScores);
    card.appendChild(cardContents);
    body.appendChild(card);

    // const currentDiv = document.getElementById("card-contents");
    // card.insertBefore(cardHeader, currentDiv);
  }
};

button.onclick = function () {
  const card1 = document.getElementById("card1");
  const card2 = document.getElementById("card2");
  card1.remove();
  card2.remove();
  button.style.display = "none";
  run.style.display = "flex";
};
