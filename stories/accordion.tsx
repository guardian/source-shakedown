import React from "react"
import { css } from "@emotion/react"
import { Accordion, AccordionRow } from "@guardian/src-accordion"
import { background } from "@guardian/src-foundations/palette"
import { textSans } from "@guardian/src-foundations/typography"
import { from } from "@guardian/src-foundations/mq"
import { space } from "@guardian/src-foundations"

const accordion = (
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

const container = css`
	width: 100%;

	${from.tablet} {
		width: 30em;
	}

	p {
		${textSans.small()};
		margin-bottom: ${space[3]}px;
	}
`

const lightGrey = css`
	background-color: ${background.secondary};
`

export default {
	title: "Accordion",
	component: Accordion,
}

const defaultLight = () => <div css={container}>{accordion}</div>

defaultLight.story = {
	name: `default light`,
}
const defaultGrey = () => <div css={[container, lightGrey]}>{accordion}</div>

defaultGrey.story = {
	name: `default grey`,
}

export { defaultLight, defaultGrey }
