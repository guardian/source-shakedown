import React from "react"
import { Button, LinkButton } from "@guardian/src-button"
import { css } from "emotion"
import { space } from "@guardian/src-foundations"

/* eslint-disable react/jsx-key */
const priorityButtons = [
	<Button>Primary</Button>,
	<Button priority="secondary">Secondary</Button>,
	<Button priority="tertiary">Tertiary</Button>,
	<Button priority="subdued">Subdued</Button>,
]
const priorityLinkButtons = [
	<LinkButton href="#">Primary</LinkButton>,
	<LinkButton href="#" priority="secondary">
		Secondary
	</LinkButton>,
	<LinkButton href="#" priority="tertiary">
		Tertiary
	</LinkButton>,
	<LinkButton href="#" priority="subdued">
		Subdued
	</LinkButton>,
]
/* eslint-enable react/jsx-key */

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[9]}px;
	}
`
const spacer = css`
	margin-bottom: ${space[3]}px;
`

export const button = (
	<>
		<div css={spacer}>
			<div css={flexStart}>
				{priorityButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
		<div css={spacer}>
			<div css={flexStart}>
				{priorityLinkButtons.map((button, index) => (
					<div key={index}>{button}</div>
				))}
			</div>
		</div>
	</>
)
