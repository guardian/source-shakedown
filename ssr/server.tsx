import express from "express"
import React from "react"
import { css } from "emotion"
import { renderToStaticMarkup } from "react-dom/server"
import { extractCritical } from "emotion-server"
import { headline } from "@guardian/src-foundations/typography"
import { Accordion, AccordionRow } from "@guardian/src-accordion"
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
		renderToStaticMarkup(
			<Accordion>
				<AccordionRow label="Collecting from multiple newsagents">
					<p>
						Present your card to a newsagent each time you collect
						the paper. The newsagent will scan your card and will be
						reimbursed for each transaction automatically.
					</p>
					<p>
						<a href="">Find your nearest participating retailer</a>
					</p>
				</AccordionRow>
				<AccordionRow label="Delivery from your retailer">
					<p>
						Simply give your preferred store / retailer the barcode
						printed on your subscription letter.
					</p>
					<p>
						<a href="">Find your nearest participating retailer</a>
					</p>
				</AccordionRow>
			</Accordion>,
		),
	)
	res.send(renderAccordionPage({ html, css }))
})

const PORT = 3030
app.listen(PORT, () => console.log(`Ready to rock: http://localhost:${PORT}`))
