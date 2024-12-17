const path = require ("path");
console.log(path);

const rootDir = path.dirname(__dirname, "..");
console.log(rootDir);

console.log(path.json("class-1" , ("path.js")));
console.log();

console.log(path.extname());
console.log(path.delimiter());