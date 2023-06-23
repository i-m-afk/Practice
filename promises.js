// setTimeout(() => {
//   console.log("hello - 1");
//   setTimeout(() => {
//     console.log("hello-2");
//     setTimeout(() => {
//       console.log("hello-3");
//     }, 1000);
//   }, 1000);
// }, 1000);

function setTimeoutPromise(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}

setTimeoutPromise(1000).then(() => {
  console.log("1");
  return setTimeoutPromise(1000).then(() => {
    console.log("2");
  });
});

// promise version of addEventListener

const button = document.querySelector("#btn-1");

function addEventListenerPromise(element, method) {
  return new Promise((resolve, reject) => {
    element.addEventListener(method, resolve);
  });
}
addEventListenerPromise(button, "click").then((e) => {
  console.log("clicked");
  console.log(e);
});
