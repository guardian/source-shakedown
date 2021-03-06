import React from "react"
import { css } from "@emotion/react"
import { space } from "@guardian/src-foundations"
import { Button } from "@guardian/src-button"

/* eslint-disable react/jsx-key */
const primaryButtons = [
	<Button className="hot-pink-background">Primary with overrides</Button>,
	<Button>Primary</Button>,
]

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${space[6]}px;
	}
`

export const classNames = () => (
	<>
		<span>
			We add a style block manually to the body, so it appears later in
			the DOM than the CSS generated by @emotion/core. We pass a className
			that matches the CSS&apos;s selector to the component.
		</span>
		<div css={flexStart}>
			{primaryButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</>
)
classNames.story = { name: "overrides using className" }
