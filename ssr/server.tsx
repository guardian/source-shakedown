import express from "express"
import { accordion } from "./accordion"
import { button } from "./button"
import { render } from "./render"
import { root } from "./root"

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

const PORT = 3030
app.listen(PORT, () => console.log(`Ready to rock: http://localhost:${PORT}`))
