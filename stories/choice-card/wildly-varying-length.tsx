import React from "react"
import { css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	ChoiceCardGroup,
	ChoiceCard,
	choiceCardDefault,
} from "@guardian/src-choice-card"

/* eslint-disable react/jsx-key */
const wildlyVaryingContentChoiceCards = [
	<ChoiceCard
		value="option-1"
		label="A very, very long piece of text"
		id="option-1"
	/>,
	<ChoiceCard value="option-2" label="Something in between" id="option-2" />,
	<ChoiceCard value="option-3" label="Short" id="option-3" />,
]
/* eslint-enable react/jsx-key */

const wide = css`
	width: 40em;
`

export const wildlyVaryingLengthLight = () => (
	<ThemeProvider theme={choiceCardDefault}>
		<div css={wide}>
			<ChoiceCardGroup name="options">
				{wildlyVaryingContentChoiceCards.map((choiceCard, index) =>
					React.cloneElement(choiceCard, { key: index }),
				)}
			</ChoiceCardGroup>
		</div>
	</ThemeProvider>
)

wildlyVaryingLengthLight.story = {
	name: `single state wildly varying length light`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.default),
		],
	},
}
