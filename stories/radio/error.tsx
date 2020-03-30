import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	RadioGroup,
	Radio,
	radioDefault,
	radioBrand,
} from "@guardian/src-radio"
import { ThemeName } from "@guardian/src-helpers"
import { ThemeProvider } from "emotion-theming"

/* eslint-disable react/jsx-key */
const unselectedRadios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

const themes: {
	name: ThemeName
	theme: {}
}[] = [
	{
		name: "default",
		theme: radioDefault,
	},
	{ name: "brand", theme: radioBrand },
]

const [errorLight, errorBlue] = themes.map(({ name, theme }) => {
	const story = () => (
		<ThemeProvider theme={theme}>
			<RadioGroup name="colours" error="Please select a colour">
				{unselectedRadios.map((radio, index) =>
					React.cloneElement(radio, { key: index }),
				)}
			</RadioGroup>
		</ThemeProvider>
	)

	story.story = {
		name: `error ${name}`,
		parameters: {
			backgrounds: [
				Object.assign(
					{},
					{ default: true },
					storybookBackgrounds[name],
				),
			],
		},
	}

	return story
})

export { errorLight, errorBlue }
