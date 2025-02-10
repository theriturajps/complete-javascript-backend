import mongoose from "mongoose";

const imageModel = new mongoose.Schema({
	image: {
		type: String,
		required: true,
		trim: true
	},
	asset_id: {
		type: String
	},
	public_id: {
		type: String
	}
}, { timeStamp: true })

export const ImageUpload = mongoose.model("ImageUpload", imageModel)