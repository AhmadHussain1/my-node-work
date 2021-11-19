const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello from serves i am ahmad hove can i help you");
  } else if (req.url == "/about") {
    res.end("this is about page");
  } else if (req.url == "/userApi") {
    // res.end("this is user api  page");
    fs.readFile(`${__dirname}/UserApi/userapi.json`, "utf-8", (err, data) => {
      console.log(data);
      res.end(data);
    });
  } else {
    res.end("error 404 page does not exist");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port 8000");
});
