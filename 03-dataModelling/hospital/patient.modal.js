import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
	},
	dignosedWith: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	bloodGroup: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ['male', 'female', 'others'],
		required: true
	},
	admittedIn: {
		type: mongoose.Schema.ObjectId,
		ref: "Hospital"
	}
}, { timestamps: true })

export const Patient = mongoose.model("Patient", patientSchema)