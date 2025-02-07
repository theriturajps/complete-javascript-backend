import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true,
	},
	pincode: {
		type: String,
		required: true,
	},
	patient: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Patient"
		}
	]
}, { timestamps: true })

export const Hospital = mongoose.model("Hospital", hospitalSchema)