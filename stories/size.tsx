import React from "react"
import { css } from "@emotion/react"
import { textSans } from "@guardian/src-foundations/typography"
import { size } from "@guardian/src-foundations/size"
import { news, neutral } from "@guardian/src-foundations/palette"

const wrapper = css`
	${textSans.medium()};
`

const row = css`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
`

const box = css`
	color: ${neutral[100]};
	background-color: ${news[400]};
	margin-right: 12px;
`

const xsmallBox = css`
	${box};
	width: ${size.xsmall}px;
	height: ${size.xsmall}px;
`
const smallBox = css`
	${box};
	width: ${size.small}px;
	height: ${size.small}px;
`

const mediumBox = css`
	${box};
	width: ${size.medium}px;
	height: ${size.medium}px;
`

const sizesStory = () => (
	<div css={wrapper}>
		<div css={row}>
			<div css={xsmallBox}></div> xsmall
		</div>
		<div css={row}>
			<div css={smallBox}></div> small
		</div>
		<div css={row}>
			<div css={mediumBox}></div> medium
		</div>
	</div>
)
sizesStory.story = { name: "sizes" }

export default {
	title: "Sizes",
}
export { sizesStory }
