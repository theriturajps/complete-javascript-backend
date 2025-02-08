// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/connect.js"
import { app } from "./app.js"
dotenv.config({
	path: './env'
})

connectDB(process.env.MONGODB_URL)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on : http://localhost:${process.env.PORT}`);
		})
	})
	.catch(error => {
		console.log("Error", error);
	})