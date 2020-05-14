import express from "express"
import { render } from "./render"
import { root } from "./root"
import { accordion } from "./accordion"
import { button } from "./button"
import { checkbox } from "./checkbox"
import { choiceCard } from "./choice-card"
import { link } from "./link"
import { radio } from "./radio"
import { textInput } from "./text-input"

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
app.get("/link", (req, res) => {
	res.send(render("Link", link))
})
app.get("/radio", (req, res) => {
	res.send(render("Radio", radio))
})
app.get("/text-input", (req, res) => {
	res.send(render("Text input", textInput))
})

const PORT = 3030
app.listen(PORT, () => console.log(`Ready to rock: http://localhost:${PORT}`))
