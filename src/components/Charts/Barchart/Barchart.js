import './stylecs.scss';
import moment from 'moment';

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Title,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

let salesArr = [];

if(localStorage.getItem('salesList')) {
    salesArr = JSON.parse(localStorage.getItem('salesList'));
}

const newSalesList = salesArr.map(elem => {
    return {
        ...elem,
        totalEarned: elem.price *  elem.remains,
        weekDay: moment(elem.saleDate).format('dddd'),
    }
});

const data = [
    { weekDay: 'Mon', totalEarned: 0 },
    { weekDay: 'Tue', totalEarned: 0 },
    { weekDay: 'Wed', totalEarned: 0 },
    { weekDay: 'Thu', totalEarned: 0 },
    { weekDay: 'Fri', totalEarned: 0 },
    { weekDay: 'Sat', totalEarned: 0 },
    { weekDay: 'Sun', totalEarned: 0 },
];

for (let i = 0; i < newSalesList.length; i++) {
    for (let j = 0; j < data.length; j++) {
        console.log(data[j])
        if(data[j]['weekDay'] === newSalesList[i]['weekDay'].slice(0,3)) {
            data[j]['totalEarned'] += newSalesList[i]['totalEarned']
        }
    }

}


class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <Paper className='barchart'>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis tickSize={10} showGrid={false} />

                    <BarSeries
                        valueField="totalEarned"
                        argumentField="weekDay"
                    />
                    <Title text="Sales Overview" />
                    <Title text="Graph sales for all days" />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}



export default Demo;



