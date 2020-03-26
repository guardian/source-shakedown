import React from "react"
import { css } from "@emotion/core"
import { size } from "@guardian/src-foundations"
import { Button } from "@guardian/src-button"

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
		Primary with overrides
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

export const createEmotionStory = () => (
	<>
		<span>
			We use create-emotion to specify a div to add a style block to. We
			then use vanilla emotion&apos;s css function to generate styles and
			pass the resulting className to the Button component.
		</span>
		<div css={flexStart}>
			{primaryButtons.map((button, index) => (
				<div key={index}>{button}</div>
			))}
		</div>
	</>
)
createEmotionStory.story = { name: "overrides using create-emotion" }
