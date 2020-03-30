console.log("Hello from node");
const fs = require("fs");
//first argument is path
//This generates a new file, can't do in browser, node NodeFirstApp.js
fs.writeFileSync("helloGen.txt", "Generated, Hello from Node");
