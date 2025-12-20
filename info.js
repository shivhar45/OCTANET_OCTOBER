let name = "shivhar patil"
console.log(name)

let date = new Date()
console.log(date)

const fs = require('fs')

fs.writeFileSync("about.txt","Learning Node.js Day 1")



const os = require("os");
console.log(os.platform())
console.log(os.freemem())
console.log(os.arch())