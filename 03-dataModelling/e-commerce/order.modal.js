import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product"
	},
	quantity: {
		type: Number,
		required: true
	}
})

const orderSchema = mongoose.Schema({
	orderPrice: {
		type: Number,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User"
	},
	orderItems: {
		type: [orderItemSchema]
	},
	address: {
		type: String,
		required: true
	},
	orderStatus: {
		type: String,
		enum: ['PENDING', 'CANCELLED', 'DELIEVERED'],
		default: "PENDING"
	}
}, { timestamps: true})

export const Order = mongoose.model("Order", orderSchema)