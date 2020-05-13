import express from "express"
import React from "react"
import { css } from "emotion"
import { renderToStaticMarkup } from "react-dom/server"
import { extractCritical } from "emotion-server"
import { headline } from "@guardian/src-foundations/typography"

const app = express()
app.use(express.json({ limit: "50mb" }))

const ExampleComponent: React.FC<{}> = () => (
	<h1
		className={css`
			${headline.medium()}
		`}
	>
		Hello World
	</h1>
)

app.get("/", (req, res) => {
	const { html, css } = extractCritical(
		renderToStaticMarkup(<ExampleComponent />),
	)
	res.send({ html, css })
})

// If local then don't wrap in serverless
const PORT = 3030
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
