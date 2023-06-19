//alert("Test");
const link = document.querySelector("div.link a[id = 'google']");
//console.log(link);
// to prevent click
link.addEventListener("click", (e) => {
  e.preventDefault(); //link is clicked but not redirected
  console.log("Prevent default");
});
// some events
/*
    mouseenter
    mouseover
    mouseleave
    focus
    blur
    resize

*/
const input = document.querySelector("div.form input[id = 'input-name']");
//console.log(input);

input.addEventListener("keydown", (e) => {
  console.log("typing");
});

const btn = document.querySelector("div.form button");
// console.log(btn);

btn.addEventListener("submit", (e) => {
  e.preventDefault;
  alert("Submitted");
});
