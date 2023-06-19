const form = document.querySelector("#new-item-form");
const input = document.querySelector("#item-input");
const btn = document.querySelector("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // store value of input
  const inputVal = input.value;
  // select list div
  const itemList = document.querySelector("#list");
  //create a new div id = item-list
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("list-item");
  // create new content
  const newItem = document.createTextNode(inputVal);
  // add new content to div
  itemDiv.appendChild(newItem);
  // add div to the list div
  itemList.appendChild(itemDiv);
  // clear the input
  form.reset();
  //input.value = ''

  // remove item
  itemDiv.addEventListener("click", () => {
    itemDiv.remove();
  });
});
