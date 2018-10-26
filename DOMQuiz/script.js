var falseBtn = document.getElementById("false"); // Import the button from HTML.
var trueBtn = document.getElementById("true"); // Import the button from HTML.
var btn = document.getElementById("btn"); // Import the button from HTML.
var pageCounter = 1; // starts with 1 question.
var cointainer = document.getElementById("container");
var data; // This variable containts the whole data from the API and the information given by the API.
var correctAnswer; // This variable contain the correct answer from the question. 
var score = 0; // This variable is just the scoreboard.
var questionCount = 0; // This variable remember how many question is done.
// When you push button, you get 1 question. For each push, you'll get another question.
btn.addEventListener("click", function() {
// The pagecounter just adds 1 each time button is pushed.
  var request = new XMLHttpRequest();
  request.open('GET', 'https://opentdb.com/api.php?amount=' + pageCounter + '&category=15&difficulty=easy&type=boolean', true);
  request.onreadystatechange = function () {


 if ((request.status == 200) && (request.readyState == 4)){
   // Begin accessing JSON data here
   data = request.response;
   data.results.forEach(data => {
     console.log(data);
     container.innerHTML = data.question; 
     correctAnswer = data.correct_answer;
     questionCount ++
     trueBtn.style.visibility = "Visible"; // Makes the button visible, because it is hidden as default.
     falseBtn.style.visibility = "Visible"; // So as soon as the question-button is pushed, the true/false-button become visible.
   });
 } 
 else {
   console.log('error'); // Just logs error if it recives a fault.
 }
}
request.responseType = 'json';
request.send();
});

// True button. 
trueBtn.addEventListener("click", function() {
      //Checks if the answer is correct.
      if(correctAnswer == "True") {
            alert("Correct!") // Alert if the answer is correct.
            score++
            console.log(score)
      } else {
            alert("Wrong!") // Alert if the answer is false.
      }
      
      // Keep count on the amount is pushed and how many question the user should be given.
      // and when the count is up to 5, the website will give you the amount of correct and it will reload after pushed OK.
      if (questionCount === 5) {
            alert("Correct Answers: " + score + " out of " + questionCount)
            location.reload();
      }
      trueBtn.style.visibility = "Hidden"; // Make the button disapear after getting pushed by the user.
     falseBtn.style.visibility = "Hidden";
});

// False button.
falseBtn.addEventListener("click", function() {
      //Checks if the answer is correct.
      if(correctAnswer == "False") {
            alert("Correct!") // Alert if the answer is correct.
            score++
            console.log(score)
      } else {
            alert("Wrong!") // Alert if the answer is false.
      }

      // Keep count on the amount is pushed and how many question the user should be given.
      // and when the count is up to 5, the website will give you the amount of correct and it will reload after pushed OK.
      if (questionCount === 5) {
            alert("Correct Answers: " + score + " out of " + questionCount)
            location.reload();
      }
      trueBtn.style.visibility = "Hidden"; // Make the button disapear after getting pushed by the user.
      falseBtn.style.visibility = "Hidden";
});
