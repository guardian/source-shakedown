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
const multiChoiceCards = [
	<ChoiceCard
		value="option-1"
		label="Option 1"
		checked={true}
		id="multi-1"
	/>,
	<ChoiceCard
		value="option-2"
		label="Option 2"
		id="multi-2"
		checked={true}
	/>,
	<ChoiceCard value="option-3" label="Option 3" id="multi-3" />,
]
/* eslint-enable react/jsx-key */

export const choiceCard = (
	<>
		<ChoiceCardGroup name="colours">
			{choiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
		<ChoiceCardGroup name="options" multi={true}>
			{multiChoiceCards.map((choiceCard, index) =>
				React.cloneElement(choiceCard, { key: index }),
			)}
		</ChoiceCardGroup>
	</>
)
