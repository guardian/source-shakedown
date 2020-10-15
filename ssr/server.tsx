import express from "express"
import { render } from "./render"
import { root } from "./root"
import { accordion } from "./accordion"
import { button } from "./button"
import { checkbox } from "./checkbox"
import { choiceCard } from "./choice-card"
import { footer } from "./footer"
import { grid } from "./grid"
import { label } from "./label"
import { layout } from "./layout"
import { link } from "./link"
import { radio } from "./radio"
import { select } from "./select"
import { textArea } from "./text-area"
import { textInput } from "./text-input"
import { userFeedback } from "./user-feedback"

const app = express()
app.use(express.json({ limit: "50mb" }))

app.get("/", (req, res) => {
	res.send(root)
})
app.get("/accordion", (req, res) => {
	res.send(render("Accordion", accordion))
})
app.get("/button", (req, res) => {
	res.send(render("Button", button))
})
app.get("/checkbox", (req, res) => {
	res.send(render("Checkbox", checkbox))
})
app.get("/choice-card", (req, res) => {
	res.send(render("Choice card", choiceCard))
})
app.get("/footer", (req, res) => {
	res.send(render("Footer", footer))
})
app.get("/grid", (req, res) => {
	res.send(render("Grid", grid))
})
app.get("/label", (req, res) => {
	res.send(render("Label", label))
})
app.get("/layout", (req, res) => {
	res.send(render("Layout", layout))
})
app.get("/link", (req, res) => {
	res.send(render("Link", link))
})
app.get("/radio", (req, res) => {
	res.send(render("Radio", radio))
})
app.get("/select", (req, res) => {
	res.send(render("Select", select))
})
app.get("/text-area", (req, res) => {
	res.send(render("Text area", textArea))
})
app.get("/text-input", (req, res) => {
	res.send(render("Text input", textInput))
})
app.get("/user-feedback", (req, res) => {
	res.send(render("User feedback", userFeedback))
})

const PORT = 3030
app.listen(PORT, () => console.log(`Ready to rock: http://localhost:${PORT}`))
