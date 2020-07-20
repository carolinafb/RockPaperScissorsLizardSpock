const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const score = document.querySelector(".score");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      score.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");
    const scores = document.querySelectorAll(".score p");
    console.log(scores);

    //every time that the animations end---> clean the style
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];

    options.forEach((options) => {
      options.addEventListener("click", function () {
        //the computer choice
        const computerNumber = Math.floor(Math.random() * 5);
        const computerChoise = computerOptions[computerNumber];

        setTimeout(() => {
          //here is were we call compare hands
          compareHands(this.textContent.toLowerCase(), computerChoise);

          //update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoise}.png`;
        }, 2000);

        //animation
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

  function playerWin(winner) {
    winner.textContent = "Player Wins";
    pScore++;
    const playerScore = document.querySelector(".player-score p");
    playerScore.style.animation = "3s scoreUpdate";
    updateScore();
  }

  function computerWin(winner) {
    winner.textContent = "Computer Wins";
    cScore++;
    const computerScore = document.querySelector(".computer-score p");
    computerScore.style.animation = "3s scoreUpdate";
    updateScore();
  }

  const compareHands = (playerChoise, computerChoise) => {
    //update text
    const winner = document.querySelector(".winner");

    //cheking for a tie
    if (playerChoise === computerChoise) {
      winner.textContent = "It is a tie";
      return;
    }
    //cheking for paper
    if (playerChoise === "paper") {
      if (computerChoise === "scissors" || computerChoise === "lizard") {
        computerWin(winner);
        return;
      } else {
        playerWin(winner);
        return;
      }
    }
    //cheking for rock
    if (playerChoise === "rock") {
      if (computerChoise === "paper" || computerChoise === "spock") {
        computerWin(winner);
        return;
      } else {
        playerWin(winner);
        return;
      }
    }
    //cheking for lizard
    if (playerChoise === "lizard") {
      if (computerChoise === "scissors" || computerChoise === "rock") {
        computerWin(winner);
        return;
      } else {
        playerWin(winner);
        return;
      }
    }
    //cheking for spock
    if (playerChoise === "spock") {
      if (computerChoise === "paper" || computerChoise === "lizard") {
        computerWin(winner);
        return;
      } else {
        playerWin(winner);
        return;
      }
    }
    //cheking for scissors
    if (playerChoise === "scissors") {
      if (computerChoise === "spock" || computerChoise === "rock") {
        computerWin(winner);
        return;
      } else {
        playerWin(winner);
        return;
      }
    }
  };

  const playerScore = document.querySelector(".player-score p");
  const computerScore = document.querySelector(".computer-score p");
  playerScore.addEventListener("animationend", function () {
    this.style.animation = "";
  });
  computerScore.addEventListener("animationend", function () {
    this.style.animation = "";
  });
  //is call all the inner function
  startGame();
  playMatch();
};

//start the game function

game();
