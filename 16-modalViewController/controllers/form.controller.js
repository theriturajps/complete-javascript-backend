import Form from "../model/form.model.js"

export const formSubmit = async (req, res) => {

	const { name, email, message } = req.body

	try {
		let form = await Form.create(req.body)
		res.json({
			success: true,
			email: form.email,
			message: "form submitted!!"
		})
	} catch (error) {
		if (error.code === 11000) {
			res.json({
				code: 11000,
				errmsg: `E11000 duplicate key error!!`,
			})
		}
		else {
			console.log('ERROR: -------', error);
		}
	}

}