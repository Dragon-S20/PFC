const game = () => {
let pScore = 0;
let cScore = 0;

const startGame = () => {
    const playBtn = document.querySelector(".intro button")
    const introScreen = document.querySelector(".intro")
    const match = document.querySelector(".match")

    playBtn.addEventlistener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn")
    });
 };
 
 // Jeu en marche

 const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand =>{
        hands.addEventListener('animationend', function () {
            this.style.animation = '';
        });
    });

    // Option du PC
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(options => {
        options.addEventListener("click", function () {
            // Choix du PC
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];

            setTimeout(() => {
        //Faire fonctionner les mains
        compareHands(this.textContent, computerChoice);
    
    // chargement image des mains
    playerHand.src = `/assets/${this.textContent}.png`;
    computerHand.src = `/assets/${computerChoice}.png`;
            }, 2000);

            //animation
    playerHand.style.animation = "shakePlayer 2s ease";
    ComputerHand.style.animation = "shakeComputer 2s ease";
        });
    });
 };

    const updateScore = () => {
    const playerScore = document.querySelector(".player-score p")
    const computerScore = document.querySelector(".computer-score p")
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
   }

    const comparehands = (playerChoice, computerChoice) => {
     const winner = document.querySelector(".winner")
     // fonction vérifie l'égalité
     if (playerChoice === computerChoice) {
         winner.textContent = "Egalité";
         return;
     }
     //fonction vérifie pour pierre
     if (playerChoice === "rock") {
         if (computerChoice === "scissors") {
             winner.textContent = "Joueur gagne";
             pScore++;
             updateScore();
             return;
         } else {
             winner.textContent = "Ordinateur gagne";
             cScore++;
             updateScore ();
             return;
         }
     }
    // vérifier pour le choix du papier
 }
 if (playerChoice === "paper"){
    if (computerChoice === "scissors"){
        winner.textContent = 'Ordinateur gagne';
        cScore++;
        updateScore();
        return;
    } else {
        winner.textContent = 'joueur gagne gagne';
        pScore++;
        updateScore();
        return;
    }
}

    // fonction vérifie les ciseaux

if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
        winner.textContent = "Ordinateur gagne";
        cScore++;
        updateScore();
        return;
    } else {
        winner.textContent = "Joueur gagne";
        pScore++;
        updateScore();
        return;
    }
}
    startGame();
    playMatch();
    updateScore();
};

game ()