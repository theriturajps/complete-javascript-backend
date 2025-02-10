import mongoose from "mongoose"

export const connectDB = async (uri) => {
	try {
		await mongoose.connect(uri)
		console.log('DB Connected!!');
	} catch (error) {
		return null
	}
}