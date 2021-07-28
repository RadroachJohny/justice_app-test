import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import * as React from 'react';

import {
	Chart,
	BarSeries,
	Title,
	ArgumentAxis,
	ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import './stylecs.scss';


const BarChart = () => {
	let salesArr = [];

	if (localStorage.getItem('salesList')) {
		salesArr = JSON.parse(localStorage.getItem('salesList'));
	}

	//Move to App 'saleItemHandler' after next storage cash cleaning
	const newSalesList = salesArr.map(elem => {
		return {
			...elem,
			totalEarned: elem.price * elem.remains,
			weekDay: moment(elem.saleDate).format('dddd'),
		}
	});

	const data = [
		{weekDay: 'Mon', totalEarned: 0},
		{weekDay: 'Tue', totalEarned: 0},
		{weekDay: 'Wed', totalEarned: 0},
		{weekDay: 'Thu', totalEarned: 0},
		{weekDay: 'Fri', totalEarned: 0},
		{weekDay: 'Sat', totalEarned: 0},
		{weekDay: 'Sun', totalEarned: 0},
	];

	for (let i = 0; i < newSalesList.length; i++) {
		for (let j = 0; j < data.length; j++) {
			if (data[j]['weekDay'] === newSalesList[i]['weekDay'].slice(0, 3)) {
				data[j]['totalEarned'] += newSalesList[i]['totalEarned']
			}
		}
	}

	const dataIsEmpty = data.reduce((acc, elem) => {
		return acc + elem.totalEarned;
	}, 0);

	return (
		<Paper className='barchart'>
			<Chart
				data={data}
			>
				<ArgumentAxis/>
				<ValueAxis tickSize={10} showGrid={false}/>

				<BarSeries
					valueField="totalEarned"
					argumentField="weekDay"
				/>
				<Title text="Sales Overview"/>
				<Title text="Graph sales for all days"/>
				<Animation/>

				{!dataIsEmpty && <p className='noData'>No Data</p>}
			</Chart>
		</Paper>
	);
}


export default BarChart;