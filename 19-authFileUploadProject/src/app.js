import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import loginRoutes from "./routes/login.routes.js";
import registerRoutes from "./routes/register.routes.js";

export const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
console.log(path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "..", "public")));
console.log(path.join(__dirname, "..", "public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	res.render("home");
});
app.get("/login", (req, res) => {
	res.render("login");
});

app.get("/register", (req, res) => {
	res.render("register");
});


// Correcting the route definitions
app.use("/api/v1/login", loginRoutes);
app.use("/api/v1/register", registerRoutes);
