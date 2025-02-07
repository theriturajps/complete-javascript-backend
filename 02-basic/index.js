require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT // 65535 ports

app.get('/', (req, res) => {
	res.send('Hello !')
})

app.get('/github', (req, res) => {
	res.json({
		name: "riturajps",
		age: 21,
		github: "https://github.com/theriturajps"
	})
})

app.listen(port, (error) => {
	console.log(`running on http://localhost:${port}`);
})