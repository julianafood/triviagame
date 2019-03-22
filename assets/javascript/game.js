$(document).ready(function() {
$('#start').on("click", function(() {

});

var questions = { 
    
  {
    q: Apples originate from Central Asia.
    choice: ["True", "False"]
    answer: true
  
  },
  
  {
    q: Humans have a maximum of five senses"
  choice: ["True", "False"]
  answer: false
  
  },
  
  {
    q: Los Angeles is the most populous city in the United States.
    choice: ["True", "False"]
    answer: true
  }
    
  }

  setTimeout(fiveSeconds, 1000 * 5000);
  setTimeout(timeUp, 1000 * 10000);
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

  var score = 0;
  var questionIndex = 0;


  function renderQuestion() {

    if (questionIndex <= (questions.length - 1)) {
      document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }
    else {
      document.querySelector("#question").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    }
  }

  function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }


  renderQuestion();
  updateScore();

  document.onkeyup = function(event) {

    if (questionIndex === questions.length) {
      return;
    }
    var userInput = event.key.toLowerCase();
    if (userInput === "t" || userInput === "f") {

      if (userInput === questions[questionIndex].a) {
        alert("Correct!");
        score++;
        updateScore();
      }
      else {
        alert("Wrong!");
      }
      questionIndex++;
      renderQuestion();

    }

  };