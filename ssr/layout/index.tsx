import React from "react"
import { Container, Columns, Column } from "@guardian/src-layout"

const example = (
	<>
		<Container>
			<Columns>
				<Column width={1 / 4}>
					<div >1 / 4</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column width={1 / 3}>
					<div >1 / 3</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column width={1 / 2}>
					<div >1 / 2</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
			</Columns>
		</Container>

		<Container>
			<Columns>
				<Column width={3 / 4}>
					<div >3 / 4</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
				<Column>
					<div >*</div>
				</Column>
			</Columns>
		</Container>
	</>
)

export const layout = <>{example}</>
