import React from "react"
import { titlepiece } from "@guardian/src-foundations/typography/obj"

const titlepieceLarge = {
	...titlepiece.large(),
}

const titlepieceMedium = {
	...titlepiece.medium(),
}

const titlepieceSmall = {
	...titlepiece.small(),
}

const titlepieceStory = () => (
	<div>
		<p css={titlepieceLarge}>The quick brown fox jumps over the lazy dog</p>
		<p css={titlepieceMedium}>
			The quick brown fox jumps over the lazy dog
		</p>
		<p css={titlepieceSmall}>The quick brown fox jumps over the lazy dog</p>
	</div>
)
titlepieceStory.story = { name: "titlepiece (obj)" }

export { titlepieceStory }
