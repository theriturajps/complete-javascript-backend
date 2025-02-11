import mongoose from "mongoose";

const userModel = new mongoose.Schema({
	fullname: {
		type: String,
		required: true,
		default: "user",
		trim: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		trim: true
	},
	profileimg: {
		type: String,
		trim: true,
		default: "https://res.cloudinary.com/dgsigmemf/image/upload/v1739280154/user-image/default.png"
	},
}, { timestamps: true })

export const User = mongoose.model('User', userModel)