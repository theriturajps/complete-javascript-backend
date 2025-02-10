import express from "express";
import path from "path"

const app = express()

app.use(express.static(path.join(path.resolve(), 'views')))


app.use(express.urlencoded({ extended: true, limit: '15kb', parameterLimit: 3 })) // Middleware to parse URL-encoded data (form data)

// Options in the urlencoded():

// extended =>	Boolean =>	Default - false	(When true, allows parsing of complex and nested objects) .(When false, only supports simple key - value pairs).
// limit	=> String / Number =>	Default - "100kb"	Defines the maximum request body size.Example: "50kb", "1mb", or 1024(bytes).
// parameterLimit =>	Number =>	Default - 1000	Specifies the maximum number of parameters allowed in the request body.


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