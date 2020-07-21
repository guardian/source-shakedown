import React from "react"
import { css } from "@emotion/core"

import { GridRow, GridItem } from "@guardian/src-grid"
import { sport } from "@guardian/src-foundations/palette"

export default {
	title: "Grid",
}

const itemStyle = css`
	width: 100%;
	height: 500px;
	background-color: ${sport[600]};
`

export const fourColLayout = () => {
	return (
		<GridRow>
			<GridItem spans={[1, 3, 3, 4]}>
				<div css={itemStyle}></div>
			</GridItem>
			<GridItem spans={[1, 3, 3, 4]}>
				<div css={itemStyle}></div>
			</GridItem>
			<GridItem spans={[1, 3, 3, 4]}>
				<div css={itemStyle}></div>
			</GridItem>
			<GridItem spans={[1, 3, 3, 4]}>
				<div css={itemStyle}></div>
			</GridItem>
		</GridRow>
	)
}

fourColLayout.story = {
	name: "four column layout",
}
