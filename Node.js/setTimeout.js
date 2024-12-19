const message = function () {
  console.log("Hello NodeJS , Welcome");
};
setTimeout(message, 5000);

setTimeout(() => {
  console.log("Calling from Arrow Function");
}, 8000);
