const os = require('os');
//current user info
const user = os.userInfo();
console.log(user);

//system up time
console.log(`The system has been running for ${os.uptime()} seconds`);

//current os - name (type), release, total memory, free memory
const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem()
}
console.log(currentOS);