import React from "react"
import { css } from "@emotion/core"
import { Legend, labelBrand } from "@guardian/src-label"
import { ThemeProvider } from "emotion-theming"
import { storybookBackgrounds } from "@guardian/src-helpers"

const fieldsetReset = css`
	border: 0;
	padding: 0;
	margin: 0;
`

export const defaultLight = () => (
	<fieldset css={fieldsetReset}>
		<Legend text="Subscribe to our newsletters" />
	</fieldset>
)

defaultLight.story = {
	name: "default light",
}

export const defaultBlue = () => (
	<fieldset css={fieldsetReset}>
		<ThemeProvider theme={labelBrand}>
			<Legend text="Subscribe to our newsletters" />
		</ThemeProvider>
	</fieldset>
)

defaultBlue.story = {
	name: "default blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}
