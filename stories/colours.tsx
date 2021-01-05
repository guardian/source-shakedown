import React from "react"
import { css } from "@emotion/react"
import { textSans } from "@guardian/src-foundations/typography"
import { news, neutral } from "@guardian/src-foundations/palette"

const box = css`
	width: 100px;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${neutral[100]};
	${textSans.medium()};
`
const newsBox = css`
	${box};
	background-color: ${news[400]};
`

const coloursStory = () => (
	<div>
		<div css={newsBox}>News 400</div>
	</div>
)
coloursStory.story = { name: "colours" }

export default {
	title: "Colours",
}
export { coloursStory }
