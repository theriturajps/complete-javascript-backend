import express from "express"
import multer from "multer";
import path from "path";
import { userRegister } from "../controller/userRegister.controller.js"

const router = express.Router()

const ImageStorage = multer.diskStorage({
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + path.extname(file.originalname)
		cb(null, 'image' + '-' + uniqueSuffix)
	}
})

const upload = multer({ storage: ImageStorage })

router.post("/", upload.single("userprofilepic"), userRegister);

export default router;