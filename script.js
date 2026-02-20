/*Add your JavaScript here*/

var introScore = 0;
var extraScore = 0;

var numQuestion = 0;

var result = document.getElementById("result");

var restart = document.getElementById("restart")

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

q1a1.addEventListener("click", intro);
q1a2.addEventListener("click", extra);

q2a1.addEventListener("click", intro);
q2a2.addEventListener("click", extra);

q3a1.addEventListener("click", extra);
q3a2.addEventListener("click", intro);

restart.addEventListener("click", functionRestart)

function intro(){
  introScore +=1;
  numQuestion +=1;
  console.log("numQuestion = " + numQuestion + "introScore = " + introScore)
  if(numQuestion == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}



function extra(){
  extraScore +=1;
  numQuestion +=1;
  console.log("numQuestion = " + numQuestion + "extraScore = " + extraScore)
  if(numQuestion == 3) {
    console.log("The quiz is done!")
    updateResult();
  }
}



function updateResult() {
  if (introScore >= 2) {
    result.innerHTML = "You are an introvert !"
    console.log("You are an introvert !");
  }
  else if (extraScore >= 2) {
    result.innerHTML = "You are an extravert !"
    console.log("You are an extravert !");
  }
}


restart.addEventListener("click", functionRestart)
var result = document.getElementById("result")

function functionRestart() {
  numQuestion = 0;
  introScore = 0;
  extraScore = 0;
  result.innerHTML = "Your result is..."
}