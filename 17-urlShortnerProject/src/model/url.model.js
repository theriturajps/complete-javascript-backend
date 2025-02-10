import mongoose from "mongoose";

const urlModel = new mongoose.Schema({
	originalUrl: {
		type: String,
		trim: true
	},
	shortUrl: {
		type: String,
		trim: true
	},
	shortId: {
		type: String,
		trim: true,
		unique: true
	}
}, { timestamps: true })

export const Url = mongoose.model("Url", urlModel)
