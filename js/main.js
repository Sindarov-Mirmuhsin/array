var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elBtn = document.querySelector(".form__btn");
var elResult = document.querySelector(".result");

var oddNumers = [1, 3, 5, 7, 9,];
var evenNumbers = [2, 4, 6, 8, 10,];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var elInputVal = elInput.value;

  if (elInputVal % 2 == 0) {
    elResult.textContent = `Bu juft son`;
    elResult.classList.add("result-span");
    evenNumbers.push(elInputVal);
    console.log(evenNumbers);
  } else {
    elResult.textContent = `Bu toq son`;
    elResult.classList.add("result-span");
    oddNumers.push(elInputVal);
    console.log(oddNumers);
  }

  elInput.value = "";
})






































