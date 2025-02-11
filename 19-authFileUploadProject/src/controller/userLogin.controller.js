import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";


export const userLogin = async (req, res) => {
	const userResponse = {
		email: req.body.email,
		password: req.body.password
	}

	const userFetchedData = await User.findOne({ email: userResponse.email })

	if (!userFetchedData) {
		return res.status(404).json({
			message: 'User not exist!! Please check the credentials.',
			success: false
		})
	}

	const hashedPassword = userFetchedData.password
	const originalPassword = await bcrypt.compare(userResponse.password, hashedPassword)

	if (userResponse.email === userFetchedData.email && originalPassword) {
		res.render('dashboard', { fullname: userFetchedData.fullname, email: userFetchedData.email, imageUrl: userFetchedData.profileimg })
	} else {
		res.render('login')
	}

}