const os = require ("os");
console.log(os.userInfo().username);
console.log(`total memory : ${os.totalmem()/ (1024 * 1024 * 1024)}`);