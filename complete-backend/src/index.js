// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/connect.js"

dotenv.config({
	path: './env'
})

const app = express()

try {
	await connectDB(process.env.MONGODB_URL)
	app.on("error", (error) => {
		console.log("Error", error);
		throw error
	})
} catch (error) {
	throw new Error(error);
}