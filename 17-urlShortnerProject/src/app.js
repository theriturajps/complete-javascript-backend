import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { urlShort } from "./controllers/urlShort.controller.js";
import { urlRedirect } from "./controllers/urlRedirect.controller.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("home", { storeUserData: null });
});

app.post("/shorturl", urlShort);
app.get("/:shortCode", urlRedirect)

export default app;
