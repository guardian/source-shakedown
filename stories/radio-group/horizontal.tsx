import React from "react"
import { RadioGroup, Radio } from "@guardian/src-radio"

const horizontal = () => (
	<RadioGroup orientation="horizontal" name="yes-or-no">
		<Radio value="yes" label="Yes" />
		<Radio value="no" label="No" defaultChecked={true} />
	</RadioGroup>
)
horizontal.story = {
	name: "orientation horizontal",
}

export { horizontal }
