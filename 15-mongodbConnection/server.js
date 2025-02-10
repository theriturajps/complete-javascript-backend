import express from "express"
import mongoose from "mongoose";
import path from "path"

const app = express()

app.use(express.static(path.join(path.resolve(), 'views')))
app.use(express.urlencoded({ extended: true, limit: '15kb', parameterLimit: 3 }))

mongoose.connect('mongodb://localhost:27017/', { dbName: 'formData' }).then(() => console.log('mongodb connected')).catch(err => console.log(err))

app.get('/', (req, res) => {
	res.render('contact.ejs')
})

app.post('/submit', (req, res) => {
	const { username, email, message } = req.body;
	console.log({ username, email, message });
	res.redirect('/')
})

app.listen(3000, () => {
	console.log('server running');
})