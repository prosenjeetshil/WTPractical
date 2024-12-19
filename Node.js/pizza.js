const EventEmitter = require("node:events");

const emitter1 = new EventEmitter();

emitter1.on("order-pizza", (size, topping) => {
  console.log(`Order received ! Baking a ${size} pizza with ${topping} `);
});

emitter1.on("order-no", (no, status) => {
  console.log(`Order ${no} is ${status} `);
});

emitter1.emit("order-pizza", "large", "mushrooms");
emitter1.emit("order-no", "303", "Prepared");
