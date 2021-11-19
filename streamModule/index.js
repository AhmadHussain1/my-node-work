const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {
  // fs.readFile("input.txt", (err, data) => {
  //   if (err) return console.error(err);
  //   res.end(data.toString());
  // });

  // rstream.on("data", (chunkdata) => {
  //   res.write("chunkdata");
  // });

  // rstream.on("end", () => {
  //   res.end("chunkdata");
  // });

  // rstream.on("error", (err) => {
  //   console.log(err);
  //   res.end("file not found");
  // });
  const rstream = fs.createReadStream("input.txt");

  rstream.pipe(res);
});

server.listen(8001, "127.0.0.1");
