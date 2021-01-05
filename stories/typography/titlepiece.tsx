import React from "react"
import { css } from "@emotion/react"
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

const titlepieceNumbers = () => (
	<div>
		<p css={titlepieceLarge}>1234567890</p>
		<p css={titlepieceMedium}>1234567890</p>
		<p css={titlepieceSmall}>1234567890</p>
	</div>
)
titlepieceNumbers.story = { name: "titlepiece numbers" }
export { titlepieceStory, titlepieceNumbers }
