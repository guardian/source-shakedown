import express from "express"
import { render } from "./render"
import { root } from "./root"
import { accordion } from "./accordion"
import { button } from "./button"
import { checkbox } from "./checkbox"
import { choiceCard } from "./choice-card"

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

const PORT = 3030
app.listen(PORT, () => console.log(`Ready to rock: http://localhost:${PORT}`))
