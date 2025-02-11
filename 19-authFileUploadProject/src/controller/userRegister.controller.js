import { v2 as cloudinary } from 'cloudinary';
import bcrypt from "bcrypt";
import { User } from '../models/user.model.js';

const saltRounds = 10;

export const userRegister = async (req, res) => {

	const imagePath = req.file.path

	const userPassword = req.body.password
	const hashedPassword = bcrypt.hashSync(userPassword, saltRounds);

	try {
		const uploadResult = await cloudinary.uploader
			.upload(imagePath, { folder: 'user-image' })
			.catch((error) => {
				console.log(error);
			});

		const userResponse = {
			fullname: req.body.fullname,
			email: req.body.email,
			password: hashedPassword,
			profileimg: uploadResult.secure_url
		}

		const existingUser = await User.findOne({ email: userResponse.email })

		if (existingUser) {
			return res.json({
				success: false,
				message: `User already exists!!! with the ${userResponse.email}`,
				email: userResponse.email
			})
		} else {

			const pushToDatabase = await User.create(userResponse)

			res.status(200).json({
				message: "User registration received!",
				data: {
					email: pushToDatabase.email,
					image: pushToDatabase.profileimg,
					_id: pushToDatabase._id
				}
			})
		}

	} catch (error) {
		console.log('SOME ERRORS OCCURS!!!!', error);
	}
};
