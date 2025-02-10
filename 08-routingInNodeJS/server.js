import http from "http";

const port = 3000

const serverr = http.createServer((req, res) => {
	console.log(req.url);
	if (req.url === '/') {
		res.end(`<h1>home</h1>`)
	} else if (req.url === '/cv') {
		res.end(`<h1>cv</h1>`)
	} else {
		res.end(`<h1>default</h1>`)
	}

})

serverr.listen(port, () => {
	console.log('running');
})