const Emmitter = require("events");
const emmiter = new Emmitter();

emmiter.on("message", (data, second, third) => {
  console.log("Вы прислали сообщение ", data);
  console.log("Секунды ", second);
});

const MESSAGE = process.env.message || "";

if (MESSAGE) {
  emmiter.emit("message", MESSAGE, 123);
} else {
  emmiter.emit("message", "Вы не указали сообщение");
}
