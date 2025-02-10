import { Url } from "../model/url.model.js"

export const urlRedirect = async (req, res) => {
	const url = `${req.params.shortCode}`
	const getStoredData = await Url.findOne({ shortId: url })
	res.redirect(getStoredData.originalUrl)
}