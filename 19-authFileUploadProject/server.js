import { connectDB } from "./src/db/connect.db.js";
import { v2 as cloudinary } from 'cloudinary';
import dotenv from "dotenv"
import { app } from "./src/app.js";

dotenv.config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUDNAME,
	api_key: process.env.CLOUDINARY_APIKEY,
	api_secret: process.env.CLOUDINARY_APISECRET
});

await connectDB(MONGODB_URI).then(
	() => app.listen(PORT, () => {
		console.log(`SERVER STARTED RUNNING @ http://localhost:${PORT} !!!`);
	})
).catch(
	e => console.log(`ERROR OCCURED !!!`)
)