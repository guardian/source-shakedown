import React from "react"
import { Link, ButtonLink } from "@guardian/src-link"

/* eslint-disable react/jsx-key */
const priorityLinks = [
	<Link href="https://example.com">Primary</Link>,
	<Link priority="secondary" href="https://example.com">
		Secondary
	</Link>,
]
/* eslint-enable react/jsx-key */

export const link = (
	<>
		{priorityLinks.map((link, index) => (
			<div key={index}>{link}</div>
		))}
		<form action="https://www.example.com">
			<ButtonLink type="submit">Button Link</ButtonLink>
		</form>
	</>
)
