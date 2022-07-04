import React from 'react';
import { Table } from 'react-bootstrap'
import { sentenceCase } from 'change-case'

export default function DataComponent (props) {

	function getMeasurements(key) {
		const unit = props.cookie.unit;
		const temperature = ['temp_min', 'temp_max', 'temp', 'feels_like'];
		const humidity = 'humidity';
		const pressure = 'pressure';
		const tempSign = {
			metric: (<>&#8451;</>),
			standart: (<>&#8490;</>),
			imperial: (<>&#8457;</>)
		}
		if(temperature.includes(key)) {
			return tempSign[unit];
		}
		if(humidity===key) {
			return '%';
		}			
		if(pressure===key) {
			return (<>&#13169;</>);
		}
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