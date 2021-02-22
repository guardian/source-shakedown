import { Columns } from "@guardian/src-layout"

const gridStoryWrapper = (storyFn: () => JSX.Element) => {
	// override 8px margin applied globally to every preview body
	return <div style={{ margin: "0 -8px" }}>{storyFn()}</div>
}

export default {
	title: "Columns",
	component: Columns,
	decorators: [gridStoryWrapper],
}

export * from "./columns/collapse-below"
export * from "./columns/default"
export * from "./columns/with-width"
