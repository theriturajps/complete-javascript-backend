import express from "express";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from 'cloudinary';
import { ImageUpload } from "./model/imageUpload.model.js"

const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())


app.get("/", (req, res) => {
	res.render("index", { imageUrl: null });
});


const storage = multer.diskStorage({
	destination: './public/uploads/', // auto generate folder
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + path.extname(file.originalname)
		cb(null, 'image' + '-' + uniqueSuffix)
	}
})

const upload = multer({ storage: storage })

app.post('/uploadimage', upload.single('pngFileUpload'), async (req, res) => {
	try {
		const filePath = req.file.path
		console.log(filePath);
		const cloudinaryResult = await cloudinary.uploader.upload(filePath, { folder: "imagedb" })
		const imageToDB = await ImageUpload.create({
			image: cloudinaryResult.secure_url,
			asset_id: cloudinaryResult.asset_id,
			public_id: cloudinaryResult.asset_id
		})
	
		res.render("index", { imageUrl: cloudinaryResult.secure_url });

		res.json({
			message: "Image uploaded successfully",
			data: cloudinaryResult,
			imageUrl: imageToDB.image
		})
	} catch (error) {
		return null
	}
})

export default app