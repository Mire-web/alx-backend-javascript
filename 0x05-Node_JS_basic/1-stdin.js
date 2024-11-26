process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.setEncoding("utf8");
process.stdin.on('data', (chunk) => {
	process.stdout.write("Your name is: " + chunk.toString().trim());
	process.exit();
})
process.on('exit', () => {
	if (!process.stdin.isTTY)
		process.stdout.write("This important software is now closing\n");
})
