import React from "react"
import { RadioGroup, Radio } from "@guardian/src-radio"
/* eslint-disable react/jsx-key */
const radios = [
	<Radio value="red" label="Red" />,
	<Radio value="green" label="Green" checked={true} />,
	<Radio value="blue" label="Blue" />,
]
/* eslint-enable react/jsx-key */

export const radio = (
	<RadioGroup name="colours">
		{radios.map((radio, index) =>
			React.cloneElement(radio, { key: index }),
		)}
	</RadioGroup>
)
