const path = require('path');

console.log(path.sep);
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const basePath = path.basename(filePath);
console.log(basePath);
//Return absolute path
const abosolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(abosolute);
