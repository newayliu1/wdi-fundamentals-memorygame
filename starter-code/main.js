console.log("JS file is connected to HTML! Woo!")
var cardOne='queen', cardTwo='queen', cardThree='king', cardFour='king';
if (cardTwo==cardFour){
	alert("You found a match!");
}
else{
	alert("Sorry, try again.");
}

var createCards=function(){
var gameBoard = document.getElementById("game-board");
for(var i=0; i<4;i++)
{
	var newDiv=document.createElement('div');
	newDiv.className= "card"
	gameBoard.appendChild(newDiv);
}
}
createCards();