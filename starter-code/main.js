console.log("JS file is connected to HTML! Woo!")
var cards=["queen","queen","king","king"];
var cardsInPlay=[];

// if (cards.cardTwo==cards.cardFour){
// 	alert("You found a match!");
// }
// else{
// 	alert("Sorry, try again.");
// }

var createCards=function(){
var gameBoard = document.getElementById("game-board");
for(var i=0; i<4;i++)
{
	var newDiv=document.createElement('div');
	newDiv.className= "card"
	gameBoard.appendChild(newDiv);
}
}
var cardElements=document.getElementsByClassName("card");

var createBoard=function(){
	createCards();
	for (var i=0;i<cards.length; i++){
		cardElements[i].setAttribute('data-card',cards[i]);
		cardElements[i].addEventListener('click',isTwocards);
	}
}
var isTwocards = function(){
	var dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);
	if (dataCard =='king')
	{
		this.innerHTML ='<img src="my_king.png"/>';
	}
	else
	{
		this.innerHTML ='<img src="my_queen.png"/>';
	}
	// pause the excution for 1 sec.
	setTimeout(function()
	{
		if (cardsInPlay.length===2)
		{
			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
	}, 1000);
}
var isMatch = function (cards){
	for (var i=0;i<cardElements.length; i++)
	{
		cardElements[i].innerHTML='';
	}
	if (cards[0]===cards[1])
	{
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}
}
createBoard();
