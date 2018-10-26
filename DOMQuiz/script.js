var falseBtn = document.getElementById("false");
var trueBtn = document.getElementById("true");
var btn = document.getElementById("btn");
var pageCounter = 1; // starts with 1 question.
var cointainer = document.getElementById("container");
var data;
var correctAnswer;
var score = 0;
var questionCount = 0;
// When you push button, you get 1 question. For each push, you'll get another question.
btn.addEventListener("click", function() {

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
     trueBtn.style.visibility = "Visible";
     falseBtn.style.visibility = "Visible";
   });
 } 
 else {
   console.log('error');
 }
}
request.responseType = 'json';
request.send();
});


trueBtn.addEventListener("click", function() {
      
      if(correctAnswer == "True") {
            alert("Correct!")
            score++
            console.log(score)
      } else {
            alert("Wrong!")
      }

      if (questionCount === 5) {
            alert("Correct Answers: " + score + " out of " + questionCount)
            location.reload();
      }
      trueBtn.style.visibility = "Hidden";
     falseBtn.style.visibility = "Hidden";
});

falseBtn.addEventListener("click", function() {
      
      if(correctAnswer == "False") {
            alert("Correct!")
            score++
            console.log(score)
      } else {
            alert("Wrong!")
      }

      if (questionCount === 5) {
            alert("Correct Answers: " + score + " out of " + questionCount)
            location.reload();
      }
      trueBtn.style.visibility = "Hidden";
      falseBtn.style.visibility = "Hidden";
});
