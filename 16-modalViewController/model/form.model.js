import mongoose from "mongoose";

const formModel = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		lowercase: true,
		trim: true
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		trim: true
	},
	message: {
		type: String,
		trim: true
	}
}, { timestamps: true })

const Form = mongoose.model("Form", formModel)

export default Form