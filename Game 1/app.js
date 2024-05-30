// Chapter 9
// Building Game : Stone, Paper & Scissors.

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("Game Was Draw !");
  msg.innerText = "Game Was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    // console.log("You Win !");
    userScore++;
    userScorePara.innerText =userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    // console.log("You Lose !");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red";
  }
};

// Play Game Function
const playGame = (userChoice) => {
  // console.log("User Choice = ", userChoice);
  //Genearate Computer Choice
  const compChoice = genCompChoice();
  // console.log("Computer Choice = ", compChoice);

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors,rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

// Add Event on Click of the Element like rock ,scissor, and rock
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
