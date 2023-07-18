// challenge 1: Your age in days
function ageInDays() {
    var birthYear = prompt('What Year were you born ... Good Friend?');// function will take input through prompt
    var ageInDays=(2018-birthYear)*365; // calculate the days 

    var h1=document.createElement('h1');// create h1 tag
    var textAnswer=document.createTextNode('You are ' + ageInDays + ' Days old.'); // create the text to be displayed inside h1
    h1.setAttribute('id','ageInDays');// set its id
    h1.appendChild(textAnswer);// add text inside h1 tag 
   document.getElementById('flex-box-result').appendChild(h1); // result me h1 tag ko show kro
}

function reset() {
document.getElementById('ageInDays').remove();// remove 
}


// challenge 2: Cat Generator
function generateCat(){

    var image=document.createElement('img'); //create img tag
    image.src="https://media.tenor.com/d7QFumaEueQAAAAS/cat-cute.gif"; //adding src link to img
    var div=document.getElementById('flex-cat-gen');// accesss the id in div
   
div.appendChild(image);// add the images in div id

}

//Challenge 3: Rock, Paper, Scissors

function rpsGame(yourChoice) {
console.log(yourChoice); // click to make your choice 

  var humanChoice, botChoice; // create 2 variables

  humanChoice = yourChoice.id; // give id of the img you have clicked

  botChoice = numberToChoice(randToRpsInt()); // botchoice will be calculated by the function
  console.log("computer choice:", botChoice); // print the computer choiice

  results = decideWinner(humanChoice, botChoice); // give both the choices to function  to calculate the results

  console.log(results); // print the results

  message = finalMesssage(results); //print the message
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice, message);
}


function randToRpsInt() {
    return Math.floor(Math.random() * 3); //generate the random number between 0-2
  }

  function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number]; // generate the bot choice according to the number
  }


  function decideWinner(yourChoice, computerChoice) {
    // decide the winner according to the choices
    var rpsDatabase = {
      'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
      'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
      'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
  }

  // final message to be printed
  function finalMesssage([yourScore, computerScore]) {
    if (yourScore == 0) {
      return { 'message': "you lost!", 'color': "red" };
    } else if (yourScore == 0.5) {
      return { 'message': "you tied!",'color': "yello" };
    } else {
        return { 'message': "you won!", 'color': "green" };
  }
}

   function rpsFrontEnd(humanImageChoice, botImageChoice ,finalMesssage){
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }


    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

humanDiv.innerHTML="<img src='" + imageDatabase[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
botDiv.innerHTML="<img src='" + imageDatabase[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
messageDiv.innerHTML="<h1 style='color:"+ finalMesssage['color']+"; font-size: 60px; padding: 30px; '>"+ finalMesssage['message']+ "</h1>"

document.getElementById('flex-box-rps-div').appendChild(humanDiv);
document.getElementById('flex-box-rps-div').appendChild(botDiv);
document.getElementById('flex-box-rps-div').appendChild(messageDiv);


}


   // challenge 4: Change the color of All the Buttons

   var all_buttons = document.getElementsByTagName('button');
   console.log(all_buttons);

   var copyAllButtons=[]; // create an array to store all the buttons
   
   for(let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
   }
   console.log(copyAllButtons);


   //function to choose the button
   //the value of button will decide which function to call

   function buttonColorChange(buttonThing){
    if(buttonThing.value==='red'){
      buttonsRed();
    }
    else if(buttonThing.value==='green'){
      buttonsGreen();
    } else if(buttonThing.value==='reset'){
      buttonColorReset();
    }else if(buttonThing.value==='random'){
     randomColors();
    }
    }


    //functions to be called for colorchange
    function buttonsRed(){
      for(let i=0;i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
      }
    }

    function buttonsGreen(){
      for(let i=0;i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
      }
    }

    function buttonColorReset(){
      for(let i=0;i< all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
      }
    }

    function randomColors(){
      let choices=['btn-primary','btn-danger','btn-success','btn-warning']

      for(let i=0;i< all_buttons.length; i++){
        let randomNumber=Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
      }
    }







// challenge 5

// mapping is done 
let blackjackgame = {
  // objects  inside  the objects
  you: { scoreSpan: "#your-blackjack-result", div: "#your-box", score: 0 },

  dealer: {
    scoreSpan: "#dealer-blackjack-result",
    div: "#dealer-box",
    score: 0,
  },

  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"], //array of string

  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },

  wins: 0,
  losses: 0,
  draws: 0,
  IsStand: false,
  turnsOver: false,
};

// create two variables 
const YOU = blackjackgame['you']
const DEALER = blackjackgame['dealer']

// for adding sound 
const hitSound= new Audio('swish.m4a');
const winSound= new Audio('cash.mp3');
const lossSound= new Audio('aww.mp3');




// functions to be called when all the buttons are clicked
document.querySelector('#hit-button').addEventListener('click',blackjackHit);
document.querySelector('#deal-button').addEventListener('click',blackjackDeal);
document.querySelector('#stand-button').addEventListener('click',blackjackStand);

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}


//////////////////////////////////////
function blackjackHit() {

  if (blackjackgame["IsStand"] === false) {

    let card = randomCard();
    showCard(card, YOU);
    updateSCore(card, YOU);
    showScore(YOU);
   
  }
}


///////////////////////////////////////

async function blackjackStand() {
  
 blackjackgame["IsStand"] = true;

  while (DEALER["score"] < 16 && blackjackgame["IsStand"] === true) {

    let card = randomCard();
    showCard(card, DEALER);
    updateSCore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);   //automate
  }

  blackjackgame["turnsOver"] = true;// condition for the deal button to execute
  let winner = computeWinner();
  showResult(winner);
}

  
/////////////////////////////////////////////////////////
//functioning of the deal button 
// this  will remove all the cards from the your side and dealer side
function blackjackDeal() {

  if (blackjackgame["turnsOver"] === true) {  //condition check

    blackjackgame["IsStand"] =false;//deactivate the game hit button firse chl paega

    let yourImages = document
      .querySelector("#your-box")
      .querySelectorAll("img"); // selection of all the images from your side

    let dealerImages = document
      .querySelector("#dealer-box")
      .querySelectorAll("img"); // selection of all the images from dealer side

    for (i = 0; i < yourImages.length; i++) {
      // removal of all the images from your side
      yourImages[i].remove();
    }

    for (i = 0; i < dealerImages.length; i++) {
      // removal of all the images from dealer side
      dealerImages[i].remove();
    }
   

    // again initialise score to zero and change the color

    YOU["score"] = 0; //backend
    DEALER["score"] = 0;
    document.querySelector("#your-blackjack-result").textContent = 0;
    document.querySelector("#dealer-blackjack-result").textContent = 0;
    document.querySelector("#your-blackjack-result").style.color = "#ffffff";
    document.querySelector("#dealer-blackjack-result").style.color = "#ffffff";
    document.querySelector("#blackjack-result").textContent = "Let's PLay";
    document.querySelector("#blackjack-result").style.color = "black";
    blackjackgame["turnsOver"] =true;
  }
}


// generate the random card 
function randomCard(){
  let randomIndex=Math.floor(Math.random()*13);
  return blackjackgame['cards'][randomIndex];
}
// show the random card of the active player 

function showCard(card,activeplayer){
  if(activeplayer['score']<=21){
  let cardImage=document.createElement('img');
  cardImage.src=`${card}.png`;
  document.querySelector(activeplayer['div']).appendChild(cardImage);
  hitSound.play();}
}

// function to update the score of the player
function updateSCore(card, activeplayer) {
  if (card === "A") {
    //if adding 11 keeps me below 21, add 11.Otherwise ,add 1
    if (activeplayer["score"] + blackjackgame["cardsMap"][card][1] <= 21) {
      activeplayer["score"] += blackjackgame["cardsMap"][card][1];
    } else {
      activeplayer["score"] += blackjackgame["cardsMap"][card][0];
    }
  } 
  else {
    activeplayer["score"] += blackjackgame["cardsMap"][card];
  }
}

// function to show the score of the activeplayer
//if greater than 21 ->stop showing and print "BUST" ->color it red 

function showScore(activeplayer){
  if(activeplayer['score']>21){
    document.querySelector(activeplayer['scoreSpan']).textContent='BUST!'
    document.querySelector(activeplayer['scoreSpan']).style.color='red';
  }

  else{
  document.querySelector(activeplayer['scoreSpan']).textContent=activeplayer['score'];
  
  }
}



  // compute the winner and return who just won

  //update the wins ,drawsand losses
function computeWinner() {
  let winner;

  if( YOU['score'] <=21){//your score is in range og 21
// condition : higher score than dealer or when dealer busts
    if( (YOU['score']>DEALER['score']) || (DEALER['score']>21) )  {
      blackjackgame['wins']++;
      winner=YOU;
    }
    //condition : lower score than dealer
    else if( YOU['score']  <  DEALER['score']){
      blackjackgame['losses']++;
      winner=DEALER;
    }
     //condition : both have equal score 
    else if ( YOU['score']  ===  DEALER['score']) {
      blackjackgame['draws']++;
    }
  }

// your score got out of range 21
// condition: when you  busts but dealer doesn't
else if( YOU['score'] >21 && DEALER['score']<=21) {
  blackjackgame['losses']++;
  winner=DEALER;
}

// condition : when you and dealer busts
else if( YOU['score'] >21 && DEALER['score']>21) {
  blackjackgame['draws']++;

}
console.log('Winner is', winner);
return winner;

}



// function to show the result
function showResult(winner){
 if( blackjackgame["turnsOver"] === true){

  let message,messageColor;
  if(winner===YOU){
    document.querySelector('#wins').textContent=blackjackgame['wins'];
    message ='you won!';
    messageColor='green';
    winSound.play();
  }
  else if(winner===DEALER){
    document.querySelector('#losses').textContent=blackjackgame['losses'];
    message ='you lost!';
    messageColor='red';
    lossSound.play();
  }
  else{
    document.querySelector('#draws').textContent=blackjackgame['draws'];
    message='you drew!';
    messageColor='black';
  }
document.querySelector('#blackjack-result').textContent=message;
document.querySelector('#blackjack-result').style.color=messageColor;

}
}