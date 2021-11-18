const fs = require('fs');
const first = fs.readFileSync('./content/text.txt', 'utf-8');
console.log(first);
fs.writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}`,
    { flag: 'a' }
)