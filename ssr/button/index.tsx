import React from "react"
import { Button } from "@guardian/src-button"
import { css } from "emotion"
import { size } from "@guardian/src-foundations"

/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button>Primary</Button>,
	<Button priority="secondary">Secondary</Button>,
	<Button priority="tertiary">Tertiary</Button>,
	<Button priority="subdued">Subdued</Button>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${size.medium}px;
	}
`

export const button = (
	<div className={flexStart}>
		{priorityButtons.map((button, index) => (
			<div key={index}>{button}</div>
		))}
	</div>
)
