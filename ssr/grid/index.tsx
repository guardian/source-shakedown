import React from "react"
import { ClassNames } from "@emotion/core"

import { GridRow, GridItem } from "@guardian/src-grid"
import { sport } from "@guardian/src-foundations/palette/cjs"

const col = ({ css }: { css: any }) => (
	<div
		className={css`
			width: 100%;
			height: 500px;
			background-color: ${sport[600]};
		`}
	></div>
)

export const grid = (
	<GridRow>
		<GridItem spans={[1, 3, 3, 4]}>
			<ClassNames>{col}</ClassNames>
		</GridItem>
		<GridItem spans={[1, 3, 3, 4]}>
			<ClassNames>{col}</ClassNames>
		</GridItem>
		<GridItem spans={[1, 3, 3, 4]}>
			<ClassNames>{col}</ClassNames>
		</GridItem>
		<GridItem spans={[1, 3, 3, 4]}>
			<ClassNames>{col}</ClassNames>
		</GridItem>
	</GridRow>
)
