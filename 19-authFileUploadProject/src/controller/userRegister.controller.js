import { v2 as cloudinary } from 'cloudinary';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model.js';

const SALT_ROUNDS = 10;

export const userRegister = async (req, res) => {
	try {
		// Validate required fields
		const { fullname, email, password } = req.body;

		if (!fullname || !email || !password) {
			return res.status(400).json({
				success: false,
				message: 'Missing required fields: fullname, email, and password are required'
			});
		}

		// Check if user already exists
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(409).json({
				success: false,
				message: `User already exists with email: ${email}`,
				email
			});
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

		// Prepare user data
		const userData = {
			fullname,
			email,
			password: hashedPassword
		};

		// Handle profile image upload if present
		if (req.file) {
			try {
				const uploadResult = await cloudinary.uploader.upload(
					req.file.path,
					{ folder: 'user-image' }
				);
				userData.profileimg = uploadResult.secure_url;
			} catch (uploadError) {
				console.error('Image upload error:', uploadError);
				return res.status(500).json({
					success: false,
					message: 'Failed to upload profile image'
				});
			}
		}

		// Create new user
		const newUser = await User.create(userData);

		// Return success response
		return res.status(201).json({
			success: true,
			message: 'User registration successful',
			data: {
				email: newUser.email,
				image: newUser.profileimg,
				_id: newUser._id
			}
		});

	} catch (error) {
		console.error('Registration error:', error);
		return res.status(500).json({
			success: false,
			message: 'Internal server error during registration'
		});
	}
};