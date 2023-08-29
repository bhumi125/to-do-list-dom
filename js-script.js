const addButton = document.getElementById("add");
const input = document.getElementById("userInput");
// 123
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");

const ENTER_BUTTON_CODE = 13;

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

function createListElement() {
  // step1: create new li element
  // const newLiElement = document.createElement('li');

  // step2: get input value

  // step3: append element to ul and then reset input field

  function crossOut() {
    newLiElement.classList.toggle("todos--done");
  }

  // step4: add click event listener to new li

  // step5: create delete button and append intp new li

  function deleteListItem() {
    newLiElement.classList.add("todos--delete");
  }

  // step6: add click event listener to delete button
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === ENTER_BUTTON_CODE) {
    createListElement();
  }
}

addButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
