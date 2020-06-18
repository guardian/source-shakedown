import React, { useState } from "react"

import { CheckboxGroup, Checkbox } from "@guardian/src-checkbox"

const list = [
	{ label: "Item 1", value: "item-1" },
	{ label: "Item 2", value: "item-2" },
	{ label: "Item 3", value: "item-3" },
]
export const WithState = () => {
	const [selectedList, setSelectedList] = useState<string[]>([])
	return (
		<CheckboxGroup name="items">
			{list.map(({ value, label }, index) => {
				const isChecked = !!selectedList.find(ele => ele === value)
				return (
					<Checkbox
						key={index}
						label={label}
						value={value}
						checked={isChecked}
						onChange={() => {
							setSelectedList(
								isChecked
									? selectedList.filter(ele => ele !== value)
									: [...selectedList, value],
							)
						}}
					/>
				)
			})}
		</CheckboxGroup>
	)
}
WithState.story = { name: "with state" }
