var shuffle = function(){ // Tasowanie - przypisanie wartości random
	var i;
	for (i=0; i<deck.length; i++){
		/*if(deck[i].points===11){
			deck[i].random = 0.98;
		}else{*/
			deck[i].random = Math.random();	
		//}					
					
	}	
	//console.log(deck)
}

var cardCounter = 0;				// Licznik losowanych kart
var cardCounter2 = 0;

// ALT VERSION

var superMax = function(){
	var realMax2 = Math.max(...deck.map(o => o.random)); // Max wartość random2
	var maxRandomCard2 = deck.find(function(obj){ // Wylosowana karta
		return obj.random === realMax2;
	});
	maxRandomCard2.selected = true;
	maxRandomCard2.random = 0;		// Wybrana karta ma zerowaną wartość aby nie została wybrana ponownie
	cardCounter2++;
	return maxRandomCard2;
}

var checkPoints = function(arr, player){ 			// New check Points
	var playerPoints = 0;
	for (i=0; i<arr.length; i++){			
		playerPoints+=arr[i].points;			
	}
	return playerPoints;
}

var hit = function(){
	hand.push(superMax());
	calculatePoints(hand, 'hand', false);
}

var standCheck = function(){
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

var standTakeCard = function(){
	croupier.push(superMax());
	standCheck();	
}

// END ALT VERSION

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
		$('#btn-hit').removeClass('d-none').removeClass('btn-secondary').addClass('btn-primary');
		$('#btn-stand').removeClass('d-none').removeClass('btn-secondary').addClass('btn-primary');
	}
}

var playerWins = function(){	
	$('#info-game-win').removeClass('d-none');	
	$('#btn-reset').removeClass('btn-secondary').addClass('btn-primary');
	$('#btn-hit').addClass('d-none');
	$('#btn-stand').addClass('d-none');
	$('#btn-start').addClass('d-none');
}
var playerLoses = function(){
	$('#btn-hit').addClass('d-none');
	$('#btn-stand').addClass('d-none');
	$('#btn-start').addClass('d-none');
	$('#info-game-lost').removeClass('d-none');	
	$('#btn-reset').removeClass('btn-secondary').addClass('btn-primary');
}
var draw = function(){
	$('#btn-hit').addClass('d-none');
	$('#btn-stand').addClass('d-none');
	$('#btn-start').addClass('d-none');
	$('#info-game-draw').removeClass('d-none');	
	$('#btn-reset').removeClass('btn-secondary').addClass('btn-primary');
}

var sortByRandom = function(){ // Losowanie jednej karty z talii - wybranie karty z najwyższą wartością random
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

	var myResult = deck.find(function(obj){
		return obj.random === realMax;
	});
}

var auto1 = function(){ 			// Początek rozgrywki (po dwie kart dla gracza)
	var i;
	var delay = 4;  				// 400
	for(i=0; i<4; i++){
		setTimeout(function(){
			maxRandom();
			//showDeck();
			showHand();
			showCroupierHand();
		}, delay+=5); 			//500
	}
}

// BUTTONS CONTROLS

$(document).ready(function(){
	shuffle();
});

$('#random-card').click(function(){
	shuffle();
});
$('#btn-2').click(function(){
	maxRandom();
	showHand();
	showCroupierHand();
});

$('#btn-hit').click(function(){
	hit();
	showHand();
});

$('#btn-stand').click(function(){
	standCheck();
	$('.croupier-wrapper h4').removeClass('invisible');
});

$('#btn-start').click(function(){
	$('#btn-start').addClass('d-none');
	auto1();
	$('#info-start-game').addClass('d-none');
	$('.hand-wrapper h4').removeClass('d-none');
});

$('#btn-reset').click(function(){
	location.reload();
});

