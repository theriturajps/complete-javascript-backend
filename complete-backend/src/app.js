import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express() // initilise
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true })) // for communication beyound home.
app.use(express.json({ limit: "16kb" })) // json data limit
app.use(express.urlencoded({ extended: true, limit: '16kb' })) // url size in limit
app.use(express.static(__dirname, 'public')) // public excess
app.use(cookieParser()) // work on browser cookies



// module.exports = app
// export default app
export { app }