import React from "react"
import { ThemeProvider } from "@emotion/react"
import {
	userFeedbackDefault,
	userFeedbackBrand,
} from "@guardian/src-foundations/themes"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { InlineError, InlineSuccess } from "@guardian/src-user-feedback"

export default {
	title: "UserFeedback",
}

const errorLight = () => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineError>Please enter your name</InlineError>
	</ThemeProvider>
)

errorLight.story = {
	name: `inline error default`,
}

const errorBlue = () => (
	<ThemeProvider theme={userFeedbackBrand}>
		<InlineError>Please enter your name</InlineError>
	</ThemeProvider>
)

errorBlue.story = {
	name: `inline error brand`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

const successLight = () => (
	<ThemeProvider theme={userFeedbackDefault}>
		<InlineSuccess>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
)

successLight.story = {
	name: `inline success default`,
}

const successBlue = () => (
	<ThemeProvider theme={userFeedbackBrand}>
		<InlineSuccess>Your voucher code is valid</InlineSuccess>
	</ThemeProvider>
)

successBlue.story = {
	name: `inline success brand`,
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

const errorLongLightMobile = () => (
	<InlineError>
		Please pick a date in the future, but not a leap year
	</InlineError>
)

errorLongLightMobile.story = {
	name: `long inline error light mobile`,
	parameters: {
		viewport: { defaultViewport: "mobileMedium" },
	},
}

export {
	errorLight,
	errorBlue,
	successLight,
	successBlue,
	errorLongLightMobile,
}
