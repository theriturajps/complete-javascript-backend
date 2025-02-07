require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT // 65535 ports

app.get('/', (req, res) => {
	res.send('Hello !')
})

app.get('/twitter', (req, res) => {
	res.send('Twitter !')
})

app.get('/github', (req, res) => {
	res.redirect('https://github.com/theriturajps')
})

app.get('/:path', (req, res) => { //
	console.log('Path :- ', req.params.path); // "raj"
	console.log('Path :- ', req.path); // "/raj"
	console.log('Hostname :- ', req.hostname); // "localhost"
	console.log('Base URL :- ', req.baseUrl); // ''
	console.log('URL :- ', req.url); // "/raj"
	console.log('Original URL :- ', req.originalUrl);  // "/raj"
	console.log('Method :- ', req.method); // "GET"
	console.log('Host :- ', req.headers.host); // "localhost:3000"
	console.log('Accept :- ', req.headers.accept); // "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
	console.log('user-agent :- ', req.headers['user-agent']); // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36"
	console.log('Encoding :- ', req.headers['accept-encoding']); // "gzip, deflate, br, zstd"
	console.log('accept-language :- ', req.headers['accept-language']); // "en-GB,en;q=0.9,id;q=0.8,hi;q=0.7"
	console.log('Raw Headers :- ', req.rawHeaders);
})


app.listen(port, (error) => {
	console.log(`running on http://localhost:${port}`);
})