const game = () => {
    let pScore = 0;
    let cScore = 0;

    // c'est l'heure du d-d-d-duel
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        playBtn. addEventListener ("click", () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
// match
const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerhand = document.querySelector('.player-hand');
    const computerhand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
            this.style.animation = "";
        });
    })
    // options de l'Ordinateur
    const computerOptions = ['rock', 'paper', 'scissors'];
    options.forEach(option=> {

        option.addEventListener('click', function() {
            // décision de l'ordinateur
            const computerNumbers = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

           setTimeout(() => {
             // comparhands
            compareHands(this.TextContent, computerChoice)

            // upload des images
            playerhand.src = `./assets/${this.textContent}.png`;
            compterHand.src = `./assets/${computerChoice}.png`;
           }, 2000)
           // animation
            playerhand.style.animation = "shakePlayer 2s ease";
            compterHand.style.animation = "shakeComputer 2s ease";
        });
});


const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

const compareHands = (playerChoice, computerchoice) => {

    const winner = document.querySelector('winner');
if(playerChoice === computerChoice) {
    ServiceWorkerContainer.textContent = 'NUL';
    return;
}
// rock
if(playerChoice === 'rock') {
    if (computerChoice === 'scissors'){
        winner.textContent = 'super, tu as gagné';
        pScore++;
        updateScore();
        return;
    }else{
        winnder.textcontent = 'computer wins';
        cScore++;
        updateScore();
        return;
    }
}
// papier
if(playerChoice === 'paper') {
    if (computerChoice === 'scissors'){
        winner.textContent = 'Computer wins';
        cScore++;
        updateScore();
        return;
    }else{
        winnder.textcontent = 'super, tu as gagné';
        pScore++;
        updateScore();
        return;
    }
}
    // ciseaux

    if(playerChoice === 'scissors') {
        if (computerChoice === 'rock'){
            winner.textContent = 'too bad tu as perdu';
            cScore++;
            updateScore();
            return;
        }else{
            winnder.textcontent = 'super, tu as gagné';
            pScore++;
            updateScore();
            return;
        }
    }
};


    




    //fonction intérieure
    startGame();
    playMatch();
}
};



//fonction du jeu

