import React from "react"
import { CheckboxGroup, Checkbox } from "@guardian/src-checkbox"
/* eslint-disable react/jsx-key */
const checkboxes = [
	<Checkbox label="Guardian Today: UK" value="today_uk" />,
	<Checkbox label="Guardian Today: US" value="today_us" />,
]
/* eslint-enable react/jsx-key */

export const checkbox = (
	<CheckboxGroup name="emails">
		{checkboxes.map((checkbox, index) =>
			React.cloneElement(checkbox, { key: index }),
		)}
	</CheckboxGroup>
)
