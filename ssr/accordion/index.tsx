import React from "react"
import { Accordion, AccordionRow } from "@guardian/src-accordion"

export const accordion = (
	<Accordion>
		<AccordionRow label="Collecting from multiple newsagents">
			<p>
				Present your card to a newsagent each time you collect the
				paper. The newsagent will scan your card and will be reimbursed
				for each transaction automatically.
			</p>
			<p>
				<a href="">Find your nearest participating retailer</a>
			</p>
		</AccordionRow>
		<AccordionRow label="Delivery from your retailer">
			<p>
				Simply give your preferred store / retailer the barcode printed
				on your subscription letter.
			</p>
			<p>
				<a href="">Find your nearest participating retailer</a>
			</p>
		</AccordionRow>
	</Accordion>
)
