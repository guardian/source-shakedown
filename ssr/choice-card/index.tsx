import React from "react"
import { ChoiceCard, ChoiceCardGroup } from "@guardian/src-choice-card"
/* eslint-disable react/jsx-key */

const choiceCards = [
	<ChoiceCard value="red" label="Red" id="default-red" />,
	<ChoiceCard
		value="green"
		label="Green"
		id="default-green"
		checked={true}
	/>,
	<ChoiceCard value="blue" label="Blue" id="default-blue" />,
]
/* eslint-enable react/jsx-key */

export const choiceCard = (
	<ChoiceCardGroup name="colours">
		{choiceCards.map((choiceCard, index) =>
			React.cloneElement(choiceCard, { key: index }),
		)}
	</ChoiceCardGroup>
)
