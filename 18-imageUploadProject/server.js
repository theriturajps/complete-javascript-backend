import app from "./src/app.js";
import dotenv from "dotenv"
import { connectDB } from "./src/db/connect.db.js";
import { v2 as cloudinary } from 'cloudinary';


dotenv.config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_APIKEY,
	api_secret: process.env.CLOUDINARY_APISECRET,
	secure: true,
});



connectDB(MONGODB_URI).then(
	() => {
		app.listen(PORT, () => {
			console.log(`server is running on http://127.0.0.1:${PORT}`);
		})
	}
)