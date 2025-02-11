import mongoose from "mongoose";


export const connectDB = async (uri) => {
	try {
		await mongoose.connect(uri)
		console.log(`MONGODB CONNECTED !!!`);
	} catch (e) {
		console.log('Something went wrong!!');
		process.exitCode = 1
	}
}