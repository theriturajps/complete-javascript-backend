import { writeFile } from "fs/promises" // inbuilt module
import http from "http";

const port = 3000

const write_file = async (filepath, content) => {
	await writeFile(filepath, content)
	console.log('SUCCESS!!')
}

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({
		data: 'Hello World!',
	}));
	write_file('log.txt', ` ${req.method}`)
	console.log(req);
})


server.listen(port, () => {
	console.log(`server is running on port ${port}`);
})