import mongoose from "mongoose"

const connectDB = async (DBURL) => {
	try {
		await mongoose.connect(DBURL)
		console.log('MONGODB database connected!!');
	} catch (err) {
		console.log("ERROR: Database Error Occurs!!", err)
		process.exit(1)
	}
}

export default connectDB