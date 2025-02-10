import express from "express";

const app = express()

app.get('/', (req, res) => {
	res.send('Welcome')
})
 
app.get('/cv', (req, res) => {
	res.send('resume')
})

app.listen(3000, () => {
	console.log('server running');
})