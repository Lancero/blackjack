var shuffle = function(){ 									// Shuffling - Random value for each card from deck
	var i;
	for (i=0; i<deck.length; i++){
		deck[i].random = Math.random();										
	}	
}

var cardCounter = 0;										// Card counter
var cardCounter2 = 0;

// *** NEW VERSION ***

var superMax = function(){
	var realMax2 = Math.max(...deck.map(o => o.random)); 	// Max wartość random2
	var maxRandomCard2 = deck.find(function(obj){ 			// Wylosowana karta
		return obj.random === realMax2;
	});
	maxRandomCard2.selected = true;
	maxRandomCard2.random = 0;								// Wybrana karta ma zerowaną wartość aby nie została wybrana ponownie
	cardCounter2++;
	return maxRandomCard2;
}

var checkPoints = function(arr, player){ 					// New check Points
	var playerPoints = 0;
	for (i=0; i<arr.length; i++){			
		playerPoints+=arr[i].points;			
	}
	return playerPoints;
}

var hit = function(){										// Action on Hit button - New card taken and player points calculated
	hand.push(superMax());
	calculatePoints(hand, 'hand', false);
}

var standCheck = function(){								// Action on Stand button - depends on croupier points. If 16 or less croupier have to take a card. 
	var croupierPoints = playerPoints(croupier);
	croupier[1].isHidden = false;
	var isHigh = 0;
	var needCard = 0;
	for(j=0; j<croupierPoints.length; j++){			
		if(croupierPoints[j]<=16){
			needCard++;
		}else if(croupierPoints[j]>21){
			isHigh++
		}		
	}
	if(needCard===2){
		standTakeCard();
	}else if(needCard===1 && isHigh===(croupierPoints.length-1)){
		standTakeCard();
	}
	showCroupierHand();
	calculatePoints(croupierPoints, 'croupier', true);  
}

var standTakeCard = function(){								// Action on stand - If croupier must take a card.
	croupier.push(superMax());
	standCheck();	
}

// *** END NEW VERSION ***

var maxRandom = function(){ 								// Wybranie karty o najwyższej wartości random
	
	var realMax = Math.max(...deck.map(o => o.random)); 	// Max wartość random

	var maxRandomCard = deck.find(function(obj){ 			// Wylosowana karta
		return obj.random === realMax;
	});
	
	maxRandomCard.selected = true;
	maxRandomCard.random = 0;								// Wybrana karta ma zerowaną wartość aby nie została wybrana ponownie

	cardCounter++;

	var whoStarts = function(el){ 							// Kto dostaje wybraną kartę
		if(el%2===0){
			hand.push(maxRandomCard);
			calculatePoints(hand, 'hand', false);	
		}else {
			if(croupier.length===1){
				maxRandomCard.isHidden = true;
				croupier.push(maxRandomCard);
			}else{
				croupier.push(maxRandomCard);
			}
			calculatePoints(croupier, 'croupier', false);
		}
	}
	whoStarts(cardCounter);
}


var calculatePoints = function(arr, playerName, isStand){
	if(arr.length > 0){
		var points = 0;
		for (i=0; i<arr.length; i++){
			points+=arr[i].points;											
		}
		showPoints(points, playerName, isStand);
	}

	// Akcja po otrzymaniu dwóch kart
	if(hand.length === 2 && croupier.length ===2 && isStand===false){		
		checkPoints(hand);
		checkPoints(croupier);
		$('#btn-controls-wrapper').removeClass('d-none');		
	}
}

var playerWins = function(){								// Action when player wins the game - showing info and controls the buttons visible.
	$('#info-game-win').removeClass('d-none');	
	$('#btn-reset').removeClass('btn-secondary').addClass('btn-primary');
	$('#btn-controls-wrapper').addClass('d-none');	
	$('#btn-start').addClass('d-none');
}
var playerLoses = function(){								// Action when player loses the game - showing info and controls the buttons visible.
	$('#btn-controls-wrapper').addClass('d-none');
	$('#btn-start').addClass('d-none');
	$('#info-game-lost').removeClass('d-none');	
	$('#btn-reset').removeClass('btn-secondary').addClass('btn-primary');
}
var draw = function(){										// Action when both player and croupier have same points - showing info and controls the buttons visible.
	$('#btn-controls-wrapper').addClass('d-none');
	$('#btn-start').addClass('d-none');
	$('#info-game-draw').removeClass('d-none');	
	$('#btn-reset').removeClass('btn-secondary').addClass('btn-primary');
}

var sortByRandom = function(){ 								// Losowanie jednej karty z talii - wybranie karty z najwyższą wartością random
	var i;
	var j = 1;
	var k;
	var max = 0;

	for (i=0; i<deck.length; i++){
		if(deck[i].isTaken !==true){
			if(deck[i].random > max){
				deck[i].chosen = j;
				j++;
				max = deck[i].random;
				k = deck[i];
			}else {
				deck[i].chosen = 0;
			}
		}
	}

	var takeFromDeck = function(card){
		k.isTaken = true;
		hand.push(card);
	}
	function isMax(element){
		return element >= realMax;
	}
	
	var realMax = Math.max(...deck.map(o => o.random)); 		// Max wartość random
}

var auto1 = function(){ 										// Start game autoplay (first two moves)
	var i;
	var delay = 400;  											// default: 400 ms
	for(i=0; i<4; i++){
		setTimeout(function(){
			maxRandom();
			showHand();
			showCroupierHand();
		}, delay+=500); 										// default: 500 ms
	}
}

// *** BUTTONS CONTROLS ***

$(document).ready(() =>{
	shuffle();
});

$('#btn-hit').click(() =>{										// Hit button actions
	hit();
	showHand();
});

$('#btn-stand').click(function(){								// Stand button actions
	standCheck();
	$('.croupier-wrapper h4').removeClass('invisible');
});

$('#btn-start').click(function(){								// Start button action
	$('#btn-start').addClass('d-none');
	auto1();
	$('#info-start-game').addClass('d-none');
	$('.hand-wrapper h4').removeClass('d-none');
});

$('#info-start-game').click(function(){							// Start info click action
	$('#btn-start').addClass('d-none');
	auto1();
	$('#info-start-game').addClass('d-none');
	$('.hand-wrapper h4').removeClass('d-none');
});

$('#btn-reset').click(function(){								// New Game - Restart
	location.reload();
});