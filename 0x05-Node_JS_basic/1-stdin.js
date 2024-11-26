console.log("Welcome to Holberton School, what is your name?")
process.stdin.setEncoding("utf8")
process.stdin.on('data', (chunk) => {
	console.log("Your name is: " + chunk)
	process.exit()
})
process.on('exit', () => {
	if (!process.stdin.isTTY)
		console.log("This important software is now closing")
})
