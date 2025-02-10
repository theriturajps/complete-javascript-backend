import app from "./src/app.js"
import connectDB from "./src/db/connect.db.js"

try {
	connectDB('mongodb://localhost:27017/urlShortner').then(
		() => {
			app.listen(3000, () => {
				console.log('server is running!!')
			})
		}
	).catch(
		err => console.log('Something Went Wrong!!')
	)
} catch (error) {
	console.log(error)
}