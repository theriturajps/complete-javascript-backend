import express from "express";
import path from "path"

const app = express()

app.use(express.static(path.join(path.resolve(), 'public')))

const userData = [
	{
		"message": "Hello, Albertha! Your order number is: #71",
		"phoneNumber": "(359) 310-6923 x42313",
		"phoneVariation": "+90 351 777 10 89",
		"status": "active",
		"name": {
			"first": "Arlene",
			"middle": "Skyler",
			"last": "Crona"
		},
		"username": "Arlene-Crona",
		"password": "Reqmu9tVpebYddY",
		"emails": [
			"Sunny67@gmail.com",
			"Torrey_Reinger@example.com"
		],
		"website": "https://insubstantial-smell.net/",
		"uuid": "dc5f259b-bf19-40dc-8077-44be770fff67",
		"objectId": "67a8d5d245b36504f39f6527"
	},
	{
		"message": "Hello, Tyrique! Your order number is: #86",
		"phoneNumber": "213-783-2009 x8041",
		"phoneVariation": "+90 331 215 10 14",
		"status": "active",
		"name": {
			"first": "Lue",
			"middle": "Bailey",
			"last": "Wisozk"
		},
		"username": "Lue-Wisozk",
		"password": "RvqHkj0sazE7II5",
		"emails": [
			"Bessie76@gmail.com",
			"Thomas39@gmail.com"
		],
		"website": "https://free-sign.net/",
		"uuid": "d9fc2844-aa1f-42e7-ad53-ff689d135a77",
		"objectId": "67a8d5d245b36504f39f6528"
	},
	{
		"message": "Hello, King! Your order number is: #24",
		"phoneNumber": "948-840-2758",
		"phoneVariation": "+90 327 596 10 13",
		"status": "disabled",
		"name": {
			"first": "Everette",
			"middle": "Bailey",
			"last": "Hackett"
		},
		"username": "Everette-Hackett",
		"password": "YTdKW85AkNXiSBl",
		"emails": [
			"Xavier79@example.com",
			"Kaden_Boehm@example.com"
		],
		"website": "https://delirious-attorney.com/",
		"uuid": "ecb6f977-7b11-4ab3-8225-14b91b7f3646",
		"objectId": "67a8d5d245b36504f39f6529"
	},
	{
		"message": "Hello, Edwardo! Your order number is: #38",
		"phoneNumber": "211.854.6425 x02619",
		"phoneVariation": "+90 335 656 10 47",
		"status": "disabled",
		"name": {
			"first": "Neva",
			"middle": "Nico",
			"last": "Huels"
		},
		"username": "Neva-Huels",
		"password": "zgk2ZjurpVkcqWX",
		"emails": [
			"Margie11@example.com",
			"Addie54@example.com"
		],
		"website": "https://disastrous-backdrop.biz/",
		"uuid": "32297bd6-ca51-4189-9d96-ffa47b00633f",
		"objectId": "67a8d5d245b36504f39f652a"
	}
]

console.log(path.resolve());

// send html
app.get('/', (req, res) => {
	res.render('index.ejs', { title: 'EJS Engine', userData })
})

app.get('/home', (req, res) => {
	res.sendFile('home.html', {
		root: path.join(path.resolve(), 'public')
	})
})


app.listen(3000, () => {
	console.log('server running');
})