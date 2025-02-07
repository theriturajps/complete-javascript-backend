import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	phone: {
		type: Number,
		required: true,
	},
	salary: {
		type: Number
	},
	qualification: {
		type: String,
		required: true
	},
	experienceInYear: {
		type: Number,
		default: 0
	},
	inHospital: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "Hospital"
		}
	]
}, { timestamps: true })

export const Doctor = mongoose.model("Doctor", doctorSchema)