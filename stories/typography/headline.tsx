import React from "react"
import { css } from "@emotion/core"
import { headline } from "@guardian/src-foundations/typography"

const headlineXlarge = css`
	${headline.xlarge()}
`
const headlineLarge = css`
	${headline.large()}
`
const headlineMedium = css`
	${headline.medium()}
`
const headlineSmall = css`
	${headline.small()}
`
const headlineXsmall = css`
	${headline.xsmall()}
`
const headlineXxsmall = css`
	${headline.xxsmall()}
`
const headlineXxxsmall = css`
	${headline.xxxsmall()}
`

const headlineStory = () => (
	<div>
		<p css={headlineXlarge}>The quick brown fox jumps over the lazy dog</p>
		<p css={headlineLarge}>The quick brown fox jumps over the lazy dog</p>
		<p css={headlineMedium}>The quick brown fox jumps over the lazy dog</p>
		<p css={headlineSmall}>The quick brown fox jumps over the lazy dog</p>
		<p css={headlineXsmall}>The quick brown fox jumps over the lazy dog</p>
		<p css={headlineXxsmall}>The quick brown fox jumps over the lazy dog</p>
		<p css={headlineXxxsmall}>
			The quick brown fox jumps over the lazy dog
		</p>
	</div>
)
headlineStory.story = { name: "headline" }

export { headlineStory }
