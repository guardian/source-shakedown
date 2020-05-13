import express from "express"

console.log("starting server....")
const app = express()
app.use(express.json({ limit: "50mb" }))

app.get("/", (req, res) => {
	res.send("Hello")
})

const PORT = 3030

console.log("almost there....")
app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
