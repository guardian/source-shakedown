import React from "react"
import { ExplainerAtom } from "@guardian/atoms-rendering"

export default {
	title: "Explainer",
	component: ExplainerAtom,
}
export const explainer = () => (
	<ExplainerAtom id="id" title="title" html="html" />
)
