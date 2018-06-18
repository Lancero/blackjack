var hand = [];          // Karty na ręce
var croupier = [];      // Karty krupiera
var deck = [];          // Wszystkie karty

deck[0] = {name: "Ace", color: "Clubs", points: 11, image: "/CA.png"}
deck[1] = {name: "King", color: "Clubs", points: 10, image: "/CK.png"}
deck[2] = {name: "Queen", color: "Clubs", points: 10, image: "/CQ.png"}
deck[3] = {name: "Jack", color: "Clubs", points: 10, image: "/CJ.png"}
deck[4] = {name: "10", color: "Clubs", points: 10, image: "/C10.png"}
deck[5] = {name: "9", color: "Clubs", points: 9, image: "/C9.png"}
deck[6] = {name: "8", color: "Clubs", points: 8, image: "/C8.png"}
deck[7] = {name: "7", color: "Clubs", points: 7, image: "/C7.png"}
deck[8] = {name: "6", color: "Clubs", points: 6, image: "/C6.png"}
deck[9] = {name: "5", color: "Clubs", points: 5, image: "/C5.png"}
deck[10] = {name: "4", color: "Clubs", points: 4, image: "/C4.png"}
deck[11] = {name: "3", color: "Clubs", points: 3, image: "/C3.png"}
deck[12] = {name: "2", color: "Clubs", points: 2, image: "/C2.png"}

deck[13] = {name: "Ace", color: "Spades", points: 11, image: "/SA.png"}
deck[14] = {name: "King", color: "Spades", points: 10, image: "/SK.png"}
deck[15] = {name: "Queen", color: "Spades", points: 10, image: "/SQ.png"}
deck[16] = {name: "Jack", color: "Spades", points: 10, image: "/SJ.png"}
deck[17] = {name: "10", color: "Spades", points: 10, image: "/S10.png"}
deck[18] = {name: "9", color: "Spades", points: 9, image: "/S9.png"}
deck[19] = {name: "8", color: "Spades", points: 8, image: "/S8.png"}
deck[20] = {name: "7", color: "Spades", points: 7, image: "/S7.png"}
deck[21] = {name: "6", color: "Spades", points: 6, image: "/S6.png"}
deck[22] = {name: "5", color: "Spades", points: 5, image: "/S5.png"}
deck[23] = {name: "4", color: "Spades", points: 4, image: "/S4.png"}
deck[24] = {name: "3", color: "Spades", points: 3, image: "/S3.png"}
deck[25] = {name: "2", color: "Spades", points: 2, image: "/S2.png"}

deck[26] = {name: "Ace", color: "Diamonds", points: 11, image: "/DA.png"}
deck[27] = {name: "King", color: "Diamonds", points: 10, image: "/DK.png"}
deck[28] = {name: "Queen", color: "Diamonds", points: 10, image: "/DQ.png"}
deck[29] = {name: "Jack", color: "Diamonds", points: 10, image: "/DJ.png"}
deck[30] = {name: "10", color: "Diamonds", points: 10, image: "/D10.png"}
deck[31] = {name: "9", color: "Diamonds", points: 9, image: "/D9.png"}
deck[32] = {name: "8", color: "Diamonds", points: 8, image: "/D8.png"}
deck[33] = {name: "7", color: "Diamonds", points: 7, image: "/D7.png"}
deck[34] = {name: "6", color: "Diamonds", points: 6, image: "/D6.png"}
deck[35] = {name: "5", color: "Diamonds", points: 5, image: "/D5.png"}
deck[36] = {name: "4", color: "Diamonds", points: 4, image: "/D4.png"}
deck[37] = {name: "3", color: "Diamonds", points: 3, image: "/D3.png"}
deck[38] = {name: "2", color: "Diamonds", points: 2, image: "/D2.png"}

deck[39] = {name: "Ace", color: "Hearts", points: 11, image: "/HA.png"}
deck[40] = {name: "King", color: "Hearts", points: 10, image: "/HK.png"}
deck[41] = {name: "Queen", color: "Hearts", points: 10, image: "/HQ.png"}
deck[42] = {name: "Jack", color: "Hearts", points: 10, image: "/HJ.png"}
deck[43] = {name: "10", color: "Hearts", points: 10, image: "/H10.png"}
deck[44] = {name: "9", color: "Hearts", points: 9, image: "/H9.png"}
deck[45] = {name: "8", color: "Hearts", points: 8, image: "/H8.png"}
deck[46] = {name: "7", color: "Hearts", points: 7, image: "/H7.png"}
deck[47] = {name: "6", color: "Hearts", points: 6, image: "/H6.png"}
deck[48] = {name: "5", color: "Hearts", points: 5, image: "/H5.png"}
deck[49] = {name: "4", color: "Hearts", points: 4, image: "/H4.png"}
deck[50] = {name: "3", color: "Hearts", points: 3, image: "/H3.png"}
deck[51] = {name: "2", color: "Hearts", points: 2, image: "/H2.png"}

function showDeck(){
    var deckContent ='';    
    for (i=0; i<deck.length; i++){        
        var cardSymbol = function(){
            if(deck[i].color==="Clubs"){return '<img class="card-symbol pl-2" src="img/clubs.png" alt="spades">';}
            else if (deck[i].color==="Spades"){return '<img class="card-symbol pl-2" src="img/spades.png" alt="spades">';}
            else if (deck[i].color==="Diamonds"){return '<img class="card-symbol pl-2" src="img/diamonds.png" alt="spades">';}
            else if (deck[i].color==="Hearts"){return '<img class="card-symbol pl-2" src="img/hearts.png" alt="spades">';}       
        }

        if(i>0 && i%13==0){
            if(deck[i].selected===true){
                deckContent = deckContent + '<div class="deck-card clear text-muted border-secondary">'+ deck[i].name + cardSymbol() + '</div>';
            }else{
                deckContent = deckContent + '<div class="deck-card clear"><span class="">'+ deck[i].name+'</span>' + cardSymbol() + '</div>';
            }                        
        }else{
            if(deck[i].selected===true){
                deckContent = deckContent + '<div class="deck-card text-muted">'+ deck[i].name + cardSymbol() +'</div>';
            }else{
                deckContent = deckContent + '<div class="deck-card"><span class="">'+ deck[i].name+'</span>' + cardSymbol() +'</div>';
            }
            
        }
    }
    document.getElementById("deck").innerHTML = deckContent;	
}

function showHand(){                                    // Karty gracza
    var handContent='';
    var cardSymbol = '';
    for(i=0; i<hand.length; i++){
        handContent = handContent + '<div class="deck-card text-light"><img class="single-card-deck" src="img' + hand[i].image + '"></div>';                                 
    }
    document.getElementById("hand").innerHTML = handContent;
}
                                                        // Karty krupiera
function showCroupierHand(){
    var croupierHandContent='';

    for(i=0; i<croupier.length; i++){
        if(croupier[i].isHidden){
            croupierHandContent = croupierHandContent + '<div class="deck-card text-light d-none"><img class="single-card-deck" src="img' + croupier[i].image + '"></div>'; 
        }else{
            croupierHandContent = croupierHandContent + '<div class="deck-card text-light"><img class="single-card-deck" src="img' + croupier[i].image + '"></div>';                    
        }                
    }
    document.getElementById("croupier-hand").innerHTML = croupierHandContent;
}

function showPoints(cPoints, pName, isStand){   
    if (pName === 'hand'){
        var handPoints = playerPoints(hand);                    

        if(handPoints.length===1){                      // Bez Asa            
            if(handPoints[0]===21){                
                playerWins();
                console.log('Gracz zdobył 21 punktów - gracz wygrywa');              
            }
            else if(handPoints[0] > 21){                
                playerLoses();
                console.log('Gracz przekroczył 21 punktów - gracz przegrywa'); 
            }            
            document.getElementById("total-points-hand").innerHTML = handPoints[0];
        }else{                                          // Z Asem                                                                                                
            var oPoints = 0;
            for(i=0; i<handPoints.length; i++){
                if(handPoints[i]===21){
                    playerWins();
                    $('#btn-hit').addClass('d-none');
                    $('#btn-stand').addClass('d-none'); 
                    console.log('Gracz zdobył 21 punktów z Asem - gracz wygrywa'); 
                }else if(handPoints[i]>21){
                    oPoints++;
                    console.log('Przekroczono 21 w '+oPoints+' przypadkach');

                    if(oPoints===handPoints.length){
                        playerLoses();
                        console.log('Przekroczono 21 we wszystkich przypadkach - gracz przegrywa');
                    }
                }                
            }

            /*if(handPoints[0]>21){
                document.getElementById("total-points-hand").innerHTML = ''; 
            }else{*/
                document.getElementById("total-points-hand").innerHTML = handPoints[0]; 
            //}

            for(i=1; i<handPoints.length; i++){                   
                document.getElementById("total-points-hand").append(" / "+handPoints[i]);                            
            }          
        }                 
        
    }else if(pName === 'croupier' ){
        var croupierPoints = playerPoints(croupier);

        if(croupierPoints.length===1){              // Bez Asa            
            if(croupierPoints[0]===21){                                
                playerLoses();
                console.log('Krupier zdobył 21 punktów - gracz przegrywa');
                document.getElementById("total-points-croupier").innerHTML = croupierPoints[0];
                return false;              
            }else if(croupierPoints[0] > 21){                
                playerWins();
                console.log('Krupier przekroczył 21 punktów - gracz wygrywa');
                document.getElementById("total-points-croupier").innerHTML = croupierPoints[0];
                return false;  
            }else if(isStand===true && croupierPoints[0]<21){
                var handPoints = playerPoints(hand);

                if(croupierPoints[0]>handPoints[0]){
                    playerLoses();
                    console.log('Krupier zdobył więcej punktów - gracz przegrywa'); 
                }else if(croupierPoints[0]===handPoints[0]){
                    draw();
                    console.log('REMIS!'); 
                }
            }
            document.getElementById("total-points-croupier").innerHTML = croupierPoints[0];

        }        
        else{                                  // Z Asem                                                                                                
            var oPoints = 0;
            for(i=0; i<croupierPoints.length; i++){
                if(croupierPoints[i]===21){                    
                    playerLoses();
                    $('.croupier-wrapper h4').removeClass('invisible');
                    console.log('Krupier zdobył 21 punktów z Asem - gracz przegrywa'); 
                }else if(croupierPoints[i]>21){
                    oPoints++;
                    console.log('Przekroczono 21 w '+oPoints+'przypadkach');
                    if(oPoints===croupierPoints.length){
                        playerWins();
                        console.log('Przekroczono 21 we wszystkich przypadkach - gracz wygrywa');
                    }
                }else if(isStand===true){
                    var fff = 0;
                    for(j=0; j<croupierPoints.length; j++){
                        if(croupierPoints[i]>21){
                            fff++;
                            console.log('Krupier ma przekroczoną wartość!');
                            if(fff===croupierPoints.length){
                                playerWins();
                                console.log('Przekroczono 21 we wszystkich przypadkach - gracz wygrywa');
                            }
                        }
                    }
                    var rivalPoints = playerMax(playerPoints(hand));
                    var croupierFinal =  playerMax(playerPoints(croupier)); 
                    
                    console.log(rivalPoints, croupierFinal);

                    if(croupierFinal > rivalPoints){
                        playerLoses();
                        console.log('Krupier ma więcej punktów i wygrywa');
                    }else if(croupierFinal === rivalPoints){
                        draw();
                        console.log('REMIS!'); 
                    }else{
                        playerWins();
                        console.log('Krupier ma mniej punktów - gracz wygrywa');
                    }
                }                
                else{                    
                    console.log('Koniec'); 
                }
            }
            /*if(croupierPoints[0]>21){
                document.getElementById("total-points-croupier").innerHTML = ''; 
            }else{*/
                document.getElementById("total-points-croupier").innerHTML = croupierPoints[0]; 
            //}

            for(i=1; i<croupierPoints.length; i++){                   
                document.getElementById("total-points-croupier").append(" / "+croupierPoints[i]);                            
            }               
        }  
    }       
}

var playerPoints = function(player){
    var aPoints = [0];
    var pMod = 0;
    for(i=0; i<player.length; i++){
        aPoints[0]+=player[i].points; 
        if(player[i].points===11){
            pMod++; 
        }                 
    }
    for(j=1; j<(pMod+1); j++){
        aPoints[j]=aPoints[0]-(j*10);
    }
    return aPoints;
}

var playerMax = function(arr){
    var filteredArr =[];
    for(i=0; i<arr.length; i++){
        if(arr[i]<=21){
            filteredArr.push(arr[i]);
        }
    }
    var maxPlayer = Math.max(...filteredArr);
    return maxPlayer;
}
