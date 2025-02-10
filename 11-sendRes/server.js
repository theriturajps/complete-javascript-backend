import express from "express";
import path from "path"
const app = express()

// R - Read => GET (method)

const dataArray = [
	{
		"_id": "67a8cc058c5ef961fa6de8d3",
		"guid": "b71957f1-ff8a-4f4b-8097-35248942f2f2",
		"isActive": true,
		"balance": "$1,769.72",
		"picture": "http://placehold.it/32x32",
		"age": 28,
		"email": "juliajimenez@norali.com",
		"phone": "+1 (891) 461-2138",
		"registered": "2025-01-31T08:45:21 -06:-30",
		"latitude": 13.613723,
		"longitude": -169.666569,
		"tags": [
			"sunt",
			"velit",
			"minim",
			"ipsum",
			"dolor",
			"id",
			"aliquip"
		],
		"friends": [
			{
				"id": 0,
				"name": "Kristen Carter"
			},
			{
				"id": 1,
				"name": "Karina Grant"
			},
			{
				"id": 2,
				"name": "Rice Beck"
			}
		],
		"greeting": "Hello, undefined! You have 3 unread messages.",
		"favoriteFruit": "strawberry"
	},
	{
		"_id": "67a8cc05a4ba2c116231658b",
		"guid": "6a01b57a-d6ff-47a2-a704-c5932331756b",
		"isActive": true,
		"balance": "$3,839.54",
		"picture": "http://placehold.it/32x32",
		"age": 37,
		"email": "ricebeck@norali.com",
		"phone": "+1 (924) 498-3783",
		"registered": "2024-02-07T10:38:46 -06:-30",
		"latitude": 84.464414,
		"longitude": 93.991248,
		"tags": [
			"voluptate",
			"irure",
			"adipisicing",
			"ullamco",
			"consectetur",
			"eu",
			"quis"
		],
		"friends": [
			{
				"id": 0,
				"name": "Millie Herring"
			},
			{
				"id": 1,
				"name": "Amparo Harrison"
			},
			{
				"id": 2,
				"name": "Tricia Anthony"
			}
		],
		"greeting": "Hello, undefined! You have 1 unread messages.",
		"favoriteFruit": "banana"
	}
]

// JSON
app.get('/json', (req, res) => {
	res.status(200).json({
		length: dataArray.length,
		data: dataArray
	})
})


// send html
app.get('/', (req, res) => {
	const dir = path.resolve()
	const url = path.join(dir, 'public', 'index.html')
	res.status(200).sendFile(url)
})



app.listen(3000, () => {
	console.log('server running');
})