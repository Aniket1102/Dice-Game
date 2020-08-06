var randomDice1 = Math.floor(Math.random()*6)+1;


var first= document.getElementsByClassName("img1");
first[0].setAttribute("src", "images/dice"+ randomDice1 + ".png");


var randomDice2 = Math.floor(Math.random()*6)+1;

var second= document.getElementsByClassName("img2");
second[0].setAttribute("src", "images/dice"+ randomDice2 + ".png");


if (randomDice1>randomDice2)
{
  document.querySelector("h1").innerHTML = "<i class=' symbol fas fa-flag'></i> Player 1 wins";
}

else if (randomDice1<randomDice2)
{
  document.querySelector("h1").innerHTML = "Player 2 wins<i class='symbol fas fa-flag'></i>";
}

else
{
  document.querySelector("h1").innerHTML = "draw!!!";
}
