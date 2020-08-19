import React from "react"
import { storybookBackgrounds } from "@guardian/src-helpers"
import { Footer } from "@guardian/src-footer"

export const backToTopBlue = () => <Footer showBackToTop={true} />

backToTopBlue.story = {
	name: "back to top blue",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
	},
}

export const backToTopBlueTablet = () => <Footer showBackToTop={true} />

backToTopBlueTablet.story = {
	name: "back to top blue tablet",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
		viewport: { defaultViewport: "tablet" },
	},
}

export const backToTopBlueMobile = () => <Footer showBackToTop={true} />

backToTopBlueMobile.story = {
	name: "back to top blue mobile",
	parameters: {
		backgrounds: [
			Object.assign({}, { default: true }, storybookBackgrounds.brand),
		],
		viewport: { defaultViewport: "mobileMedium" },
	},
}
