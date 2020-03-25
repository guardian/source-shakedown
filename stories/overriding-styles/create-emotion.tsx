import React from "react"
import { css } from "@emotion/core"
import { size } from "@guardian/src-foundations"
import { Button, buttonDefault } from "@guardian/src-button"
import { ThemeProvider } from "emotion-theming"

import createEmotion from "create-emotion"
const styleHook = document.getElementById("style-hook")
const emotion = createEmotion({
	//@ts-ignore
	container: styleHook,
})
const hotPinkBackground = emotion.css`
	background-color: hotpink;
`

/* eslint-disable react/jsx-key */
const primaryButtons = [
	<Button
		onClick={e => console.log("Primary clicked:", e.target)}
		className={hotPinkBackground}
	>
		Primary
	</Button>,
	<Button onClick={e => console.log("Primary clicked:", e.target)}>
		Primary
	</Button>,
]

const flexStart = css`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	> div {
		margin-right: ${size.medium}px;
	}
`

export const priorityLight = () => (
	<ThemeProvider theme={buttonDefault}>
		<div css={flexStart}>
			{primaryButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</ThemeProvider>
)
priorityLight.story = { name: "overrides using create-emotion" }
