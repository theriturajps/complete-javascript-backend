import mongoose from "mongoose";
import { DB_NAME } from "../constants";
const connectDB = async (URI) => {
	try {
		await mongoose.connect(URI + '/' + DB_NAME)
	} catch (error) {
		throw new Error(error);
	}
}

export default connectDB