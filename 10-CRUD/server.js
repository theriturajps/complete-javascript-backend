import express from "express";

const app = express()

// C - create => POST (method)
app.post('/', (req, res) => {

})

// R - Read => GET (method)
app.get('/', (req, res) => {

})

// U - Update => PUT (method)
app.put('/', (req, res) => {

})

// D - Delete => DELETE (method)
app.delete('/', (req, res) => {

})

app.listen(3000, () => {
	console.log('server running');
})