import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import {
	RadioGroup,
	Radio,
	radioDefault,
	radioBrand,
} from "@guardian/src-radio"
import { ThemeProvider } from "@emotion/react"

/* eslint-disable react/jsx-key */
const unselectedRadios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

const errorLight = () => (
	<ThemeProvider theme={radioDefault}>
		<RadioGroup name="colours" error="Please select a colour">
			{unselectedRadios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</ThemeProvider>
)

errorLight.story = {
	name: `error default`,
	parameters: {
		backgrounds: {
			default: "default",
			values: [storybookBackgrounds.default],
		},
	},
}

const errorBlue = () => (
	<ThemeProvider theme={radioBrand}>
		<RadioGroup name="colours" error="Please select a colour">
			{unselectedRadios.map((radio, index) =>
				React.cloneElement(radio, { key: index }),
			)}
		</RadioGroup>
	</ThemeProvider>
)

errorBlue.story = {
	name: `error blue`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export { errorLight, errorBlue }
