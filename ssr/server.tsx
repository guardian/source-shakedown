import express from "express"
import React from "react"
import { css } from "emotion"
import { renderToStaticMarkup } from "react-dom/server"
import { extractCritical } from "emotion-server"
import { headline } from "@guardian/src-foundations/typography"
import { render as renderAccordionPage } from "./accordion"

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

app.get("/accordion", (req, res) => {
	const { html, css } = extractCritical(
		renderToStaticMarkup(<ExampleComponent />),
	)
	res.send(renderAccordionPage())
})

const PORT = 3030
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
