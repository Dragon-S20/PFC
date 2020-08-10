"use strict"
const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Commencer le jeu
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Jouer au jeu
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
      //Option PC
      const computerOptions = ["shi", "fu", "mi"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Choix pour le PC
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `/assets/${this.textContent}.png`;
            computerHand.src = `/assets/${computerChoice}.png`;
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
    
      const winner = document.querySelector(".winner");
      //Fonction egalité
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Fonction pierre
      if (playerChoice === "shi") {
        if (computerChoice === "mi") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Fonction papier
      if (playerChoice === "fu") {
        if (computerChoice === "mi") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "mi") {
        if (computerChoice === "shi") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
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
  
  //Jeu
  game();