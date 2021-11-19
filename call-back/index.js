const fs = require("fs");

// fs.writeFileSync('read.txt', "welcome ahmad hussain");

 //fs.writeFileSync('read.txt', " welcome ahmad hussain afridi 1122 666");

// fs.appendFileSync('read.txt', "this is me only me");

// const buff_data = fs.readFileSync('read.txt');
// orig_data = buff_data.toString();
// console.log(orig_data);


// fs.renameSync('node-work','my-work');
// fs.writeFileSync('my-work.txt', "this is my first node work");
// fs.appendFileSync('my-work.txt','at present time ');
// const data = fs.readFileSync('my-work.txt','utf-8');
// console.log(data);
// fs.renameSync('my-work.txt','prac.txt')
// fs.mkdirSync('my-work');


// fs.mkdirSync("node-work");




fs.writeFile('my-work.txt', "this is my 2nd  node work",
(err)=>{
console.log('done');
console.log(err);
});

