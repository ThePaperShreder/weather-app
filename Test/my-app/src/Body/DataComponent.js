import React from 'react';
import { Table } from 'react-bootstrap'
import { sentenceCase } from 'change-case'

export default function DataComponent (props) {

	function getMeasurements(key) {
		const unit = props.cookie.unit;
		let sign = '';

		switch(key) {
			case 'temp_min':
			case 'temp_max':
			case 'temp':
			case 'feels_like':
				if(unit === 'metric') {
					sign = (<>&#8451;</>);
				}
				if(unit === 'standart') {
					sign = (<>&#8490;</>);
				}
				if(unit === 'imperial') {
					sign = (<>&#8457;</>);
				}
		}
		return sign	;			
	}

	function generateRows() {
		if(props.weather) {
		const tr = [];
		for (const [ key, value ] of Object.entries(props.weather.main)) {
				tr.push (<tr key={key}>
					<td>{sentenceCase(key)}</td>
					<td>{value} {getMeasurements(key)}</td>
					</tr>);
		}
				tr.push (<tr key="Description">
					<td>Description</td>
					<td>{props.weather.weather[0].description}</td>
					</tr>);
			   
				
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