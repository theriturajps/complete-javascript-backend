import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async (URI) => {
	try {
		await mongoose.connect(URI + '/' + DB_NAME)
		console.log(`mongodb connected!! DB NAME: ${mongoose.connection.readyState}`)
	} catch (error) {
		console.log("mongodb connection failed :- ", error)
		process.exit(1)
	}
}

export default connectDB