import React from "react"
import { Label, Legend } from "@guardian/src-label"

export const label = (
	<>
		<Label
			text="Middle name"
			optional={true}
			supporting="You may enter more than one"
		></Label>
		<fieldset>
			<Legend
				text="Subscribe to our newsletters"
				optional={true}
				supporting="Select as many as you like"
			></Legend>
		</fieldset>
	</>
)
