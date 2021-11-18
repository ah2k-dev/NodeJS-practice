const os = require('os');
console.log(os.userInfo());
console.log(os.uptime()/3600);
currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);