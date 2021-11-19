const os = require("os");

// const freemem = os.freemem();
// console.log(`${freemem / 1024 / 1024 / 1024}`);

console.log(os.arch());
console.log(os.hostname());
console.log(os.release());

// const total = os.totalmem();
//  console.log(`${os.totalmem / 1024 / 1024 / 1024}`);