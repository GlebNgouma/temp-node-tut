const os = require("os");


// obt enir des informations utiles sur l'utilisateur actuel
const user = os.userInfo();


console.log(user);
console.log(`Le temps de disponibilite du systeme ${os.uptime()}`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);