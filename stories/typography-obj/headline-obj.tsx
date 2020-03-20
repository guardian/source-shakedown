import React from "react"
import { headline } from "@guardian/src-foundations/typography/obj"

const headlineXlarge = {
	...headline.xlarge(),
}
const headlineLarge = { ...headline.large() }

const headlineMedium = { ...headline.medium() }

const headlineSmall = { ...headline.small() }

const headlineXsmall = { ...headline.xsmall() }

const headlineXxsmall = { ...headline.xxsmall() }

const headlineXxxsmall = { ...headline.xxxsmall() }

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
headlineStory.story = { name: "headline (obj)" }

export { headlineStory }
