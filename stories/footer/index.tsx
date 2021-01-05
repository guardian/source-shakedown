import React from "react"
import { Footer } from "@guardian/src-footer"
import { css } from "@emotion/react"

const topMargin = css`
	margin-top: 3em;
`

const footerStoryWrapper = (storyFn: () => JSX.Element) => {
	return <div css={topMargin}>{storyFn()}</div>
}

export default {
	component: Footer,
	title: "Footer",
	decorators: [footerStoryWrapper],
}

export * from "./back-to-top"
export * from "./default"
export * from "./with-children"
