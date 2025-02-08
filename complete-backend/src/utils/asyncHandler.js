/** Production grade working

	const asyncHandler4 = (fn) => async (req, res, next) => {
		try {
			await fn(req, res, next){
				
			}
		} catch (error) {
			res.status(error.code || 500).json({
				success: false,
				message: error.message
			})
		}
	}

*/

const asyncHandler = (requestHandler) => {
	(req, res, next) => {
		Promise.resolve(
			requestHandler(req, res, next)
		).catch(
			err => next
		)
	}
}

/** high order function
const asyncHandlers0 = (fnctn) => () => { }
const asyncHandlers1 = (fnctn) => { () => { } }
const asyncHandlers2 = (fnctn) => { async () => { } }
 */

export { asyncHandler }