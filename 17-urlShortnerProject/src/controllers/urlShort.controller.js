import { Url } from "../model/url.model.js"

function genId(length) {
	let randomID = "";
	const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < length; i++) {
		randomID += char.charAt(Math.floor(Math.random() * char.length));
	}
	return randomID;
}

export const urlShort = async (req, res) => {

	const response = req.body
	const shortId = genId(6)

	const storeUserData = {
		originalUrl: response.url,
		shortId: shortId,
		shortUrl: `http://localhost:3000/${shortId}`
	}

	try {
		const pushUserData = new Url(storeUserData)
		await pushUserData.save()

		// res.json({
		// 	success: true,
		// 	data: {
		// 		longUrl: pushUserData.originalUrl,
		// 		shortUrl: pushUserData.shortUrl,
		// 		shortId: pushUserData.shortId
		// 	}
		// })

		res.render("home", { storeUserData });
	} catch (error) {
		console.log(error);
	}

}

