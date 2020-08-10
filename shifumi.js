const jeu = () => {
    let score_joueur = 0;
    let score_IA = 0;
  
    // Ici on commence le shifumi
    const shifumi = () => {
      const playBtn = document.querySelector(".debut button");
      const introScreen = document.querySelector(".debut");
      const match = document.querySelector(".jeu");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Jouer un match
    const jouermatch= () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //IA Pattern
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Choix de l'IA
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Confrontation des mains
            compareHands(this.textContent, computerChoice);
            //Mise à jour des images
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
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "Egalité";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Vous avez gagné !";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "L'IA a gagné !";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "L'IA a gagné !";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Vous avez gagné !";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "L'IA a gagné !";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Vous avez gagné !";
          pScore++;
          updateScore();
          return;
        }
      }
    };
  
    //Is call all the inner function
    shifumi();
    jouermatch();
  };
  
  //start the game function
  jeu();