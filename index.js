var randomNum1 = Math.floor(Math.random() * 6) + 1; // generating number between 1 to 6

var randomDiceImg = "Alea_" + randomNum1 + ".png";

var randomImgSrc = randomDiceImg;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImgSrc);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg1 = "Alea_" + randomNum2 + ".png";
var randomImgSrc = randomDiceImg1;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "draw";
}
