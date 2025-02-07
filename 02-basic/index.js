require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT // 65535 ports

const githubData = {
	"login": "theriturajps",
	"id": 107362757,
	"node_id": "U_kgDOBmY5xQ",
	"avatar_url": "https://avatars.githubusercontent.com/u/107362757?v=4",
	"gravatar_id": "",
	"url": "https://api.github.com/users/theriturajps",
	"html_url": "https://github.com/theriturajps",
	"followers_url": "https://api.github.com/users/theriturajps/followers",
	"following_url": "https://api.github.com/users/theriturajps/following{/other_user}",
	"gists_url": "https://api.github.com/users/theriturajps/gists{/gist_id}",
	"starred_url": "https://api.github.com/users/theriturajps/starred{/owner}{/repo}",
	"subscriptions_url": "https://api.github.com/users/theriturajps/subscriptions",
	"organizations_url": "https://api.github.com/users/theriturajps/orgs",
	"repos_url": "https://api.github.com/users/theriturajps/repos",
	"events_url": "https://api.github.com/users/theriturajps/events{/privacy}",
	"received_events_url": "https://api.github.com/users/theriturajps/received_events",
	"type": "User",
	"user_view_type": "public",
	"site_admin": false,
	"name": "Ritu Raj Pratap Singh",
	"company": "Null",
	"blog": "https://me.exonoob.in",
	"location": "India",
	"email": null,
	"hireable": true,
	"bio": "👋",
	"twitter_username": "riturajps",
	"public_repos": 152,
	"public_gists": 8,
	"followers": 12,
	"following": 15,
	"created_at": "2022-06-12T16:39:54Z",
	"updated_at": "2025-01-30T08:20:42Z"
}

app.get('/', (req, res) => {
	res.send('Hello !')
})

app.get('/github', (req, res) => {
	res.json(githubData)
})

app.listen(port, (error) => {
	console.log(`running on http://localhost:${port}`);
})