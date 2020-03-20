import React from "react"
import { css } from "@emotion/core"
import { titlepiece } from "@guardian/src-foundations/typography"

const titlepieceLarge = css`
	${titlepiece.large()}
`
const titlepieceMedium = css`
	${titlepiece.medium()}
`
const titlepieceSmall = css`
	${titlepiece.small()}
`

const titlepieceStory = () => (
	<div>
		<p css={titlepieceLarge}>The quick brown fox jumps over the lazy dog</p>
		<p css={titlepieceMedium}>
			The quick brown fox jumps over the lazy dog
		</p>
		<p css={titlepieceSmall}>The quick brown fox jumps over the lazy dog</p>
	</div>
)
titlepieceStory.story = { name: "titlepiece" }

export { titlepieceStory }
