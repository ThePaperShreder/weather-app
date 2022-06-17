import React from 'react';
import { Table } from 'react-bootstrap'
import { sentenceCase } from 'change-case'

export default function DataComponent (props) {

//mi mozhem peredat react elementu func kotoraja vernjot massive a react uzhe sam ego obrabotaet
//
	function generateRows() {
		if(props.weather) {
		const tr = [];
//for loop kotoraja berjot dannie iz props weather chto evlaetsa otvetoms servera.
//object entries eto predvaritelno opredeljonnaja func js kotoraja rabotaet s objektami.
//ona nam vozrashaet massive v kotorom lezhat dannie objekta v vide massive s dvumja elementami 
//1.kluch ili nazvanie 
//2. ego znachenie
// { key1: 'value1', key2: 'value2' } = [ [key, valye] [key, value] ]
		for (const [ key, value ] of Object.entries(props.weather.main)) {
//.push func dlya togo chtobi dobavljat elementi v massive.
				tr.push (<tr key={key}>
					<td>{sentenceCase(key)}</td>
					<td>{value}</td>
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