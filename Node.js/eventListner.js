const events = require("events");
const eventEmitter = new events.EventEmitter();

function listner1() {
  console.log("Event received by listner 1");
}

function listner2() {
  console.log("Event received by listner 2");
}
eventEmitter.addListener("Write", listner1);
eventEmitter.on("Write", listner2);
eventEmitter.emit("Write");
console.log(eventEmitter.listenerCount("Write"));

eventEmitter.removeListener("Write", listner1);
console.log("Listner 1 is removed");
eventEmitter.emit("Write");
console.log(eventEmitter.listenerCount("Write"));
console.log("program ended");
