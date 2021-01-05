import React from "react"
import { ThemeProvider } from "@emotion/react"
import { storybookBackgrounds } from "@guardian/src-helpers"

import {
	Checkbox,
	checkboxDefault,
	checkboxBrand,
} from "@guardian/src-checkbox"

const indeterminateLight = () => (
	<ThemeProvider theme={checkboxDefault}>
		<Checkbox
			indeterminate={true}
			value="indeterminate"
			label="Indeterminate"
		/>
	</ThemeProvider>
)

indeterminateLight.story = {
	name: "indeterminate light",
}

const indeterminateBlue = () => (
	<ThemeProvider theme={checkboxBrand}>
		<Checkbox
			indeterminate={true}
			value="indeterminate"
			label="Indeterminate"
		/>
	</ThemeProvider>
)

indeterminateBlue.story = {
	name: "indeterminate blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export { indeterminateLight, indeterminateBlue }
