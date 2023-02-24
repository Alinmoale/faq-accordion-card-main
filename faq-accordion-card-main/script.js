// document.querySelectorAll(".question").forEach((question) =>
//   question.addEventListener("click", () => {
//     if (question.parentNode.classList.contains("active")) {
//       question.parentNode.classList.toggle("active");
//     } else {
//       document
//         .querySelectorAll("question")
//         .forEach((question) => question.parentNode.classList.remove("active"));

//       question.parentNode.classList.add("active");
//     }
//   })
// );
//////////////////1
// const questions = document.querySelectorAll(".question");
// const answers = document.querySelectorAll(".answer");

// function myFunction(){

//   questions.addEventListener("click", () => {
//     answers.forEach(("answer") => {
//       answer.classList.remove("answer");
//     });
//   });
// }
// myFunction();
/////////////////2
// function myFunction() {
//   document.querySelectorAll(".question").forEach((question) =>
//     question.addEventListener("click", () => {
//       document.querySelectorAll(".answer").classList.remove("answers");
//     })
//   );
// }
// myFunction();
// var acc = document.getElementsByClassName("question");
// var i;
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     var answer = this.nextElementSibling;

//     if (answer.style.display === "block") {
//       answer.style.display = "none";
//     } else {
//       answer.style.display = "block";
//     }
//   });
// }
///
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (j = 0; j < acc.length; j++) {
      acc[j].nextElementSibling.style.maxHeight = null;
    }
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}
