import React from "react"
import { Container } from "@guardian/src-layout"

const gridStoryWrapper = (storyFn: () => JSX.Element) => {
	// override 8px margin applied globally to every preview body
	return <div style={{ margin: "0 -8px" }}>{storyFn()}</div>
}

export default {
	title: "Container",
	component: Container,
	decorators: [gridStoryWrapper],
}

export * from "./container/default"
