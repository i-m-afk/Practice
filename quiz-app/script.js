const form = document.querySelector("#quiz-form");
const answers = Array.from(document.querySelectorAll(".answer"));
const alert = document.querySelector("#alert");
//mark all wrong
const questionItems = document.querySelectorAll(".question-item");
questionItems.forEach((questionItem) => {
  questionItem.classList.add("incorrect");
  questionItem.classList.remove("correct");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkedValue = answers.filter((answers) => answers.checked);
  // answers.forEach((answer) => {
  //   checkedValue.push(answer.checked);
  // });
  checkedValue.forEach((answer) => {
    const bool = answer.getAttribute("value") === "true";
    const questionItem = answer.closest(".question-item");
    if (bool) {
      questionItem.classList.add("correct");
      questionItem.classList.remove("incorrect");
    } else {
      questionItem.classList.add("incorrect");
      questionItem.classList.remove("correct");
    }

    // all correct
    const isTrue = checkedValue.every((answer) => answer.value === "true");
    const allAns = checkedValue.length === questionItems.length;
    if (isTrue && allAns) {
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 1000);
    }
  });
});
