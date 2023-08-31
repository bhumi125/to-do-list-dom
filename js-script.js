const addButton = document.getElementById("add");
const input = document.getElementById("userInput");

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
  const newLiElement = document.createElement("li");

  const inputValue = input.value;
  newLiElement.appendChild(document.createTextNode(inputValue));

  inputValue.value = "";

  function crossOut() {
    newLiElement.classList.toggle("todos--done");
  }

  ul.appendChild(newLiElement);
  newLiElement.addEventListener("click", crossOut);

  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("X"));
  newLiElement.appendChild(deleteBtn);

  function deleteListItem() {
    newLiElement.classList.add("todos--delete");
  }

  deleteBtn.addEventListener("click", deleteListItem);
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
