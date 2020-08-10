"use strict"
const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Début du jeu
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const song = document.querySelector(".song");

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      song.play();
    });
  };
  //Commencer le jeu
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    // Options de Donald
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Choix donald
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Rappel des mains
          compareHands(this.textContent, computerChoice);
          //Chargement Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Chargement du text
    const winner = document.querySelector(".winner");
    console.log(playerChoice())
    //Egalité
    if (playerChoice === computerChoice) {
      winner.textContent = "Egalité";
      return;
    }
    //Fonction pierre
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Joueur gagne";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Donald gagne";
        cScore++;
        updateScore();
        return;
      }
    }
    //Fonction papier
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Donald gagne";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player gagne";
        pScore++;
        updateScore();
        return;
      }
    }
    //Fonction ciseaux
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Donald gagne";
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
  };

  //Appel des fonctions
  startGame();
  playMatch();
};

//Démarrage  ok 
game();