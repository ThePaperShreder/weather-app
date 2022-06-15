import React from 'react';
import { Table } from 'react-bootstrap'
import { sentenceCase } from 'change-case'

export default function DataComponent (props) {

	function generateRows() {
		if(props.weather) {
		const tr = [];
		for (const [ key, value ] of Object.entries(props.weather.main)){
				tr.push (<tr key={key}>
							<td>{sentenceCase(key)}</td>
							<td>{value}</td>
							</tr>)
				}   
			return tr;    
		}
	}

	return (
			<Table striped>
				<thead>
					<tr>
						<th>Data</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{generateRows()}
				</tbody>
			</Table>
		)
}