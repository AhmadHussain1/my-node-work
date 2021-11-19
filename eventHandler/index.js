const eventEmitter = require("events");
const event = new eventEmitter();

event.on("check", (cd,msg) => {
  console.log(`hy this is my first event with code ${cd} and msg ${msg}`);
});

event.emit("check", 200, "ok");
