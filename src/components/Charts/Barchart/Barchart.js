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




const salesListArr = JSON.parse(localStorage.getItem('salesList'));

const testArr = salesListArr.map(elem => {
  return {
    ...elem,
    weekday: moment(elem.saleDate).format('dddd'),
    totalEarnedPerItem: elem.price * elem.remains,
  }
});

const dataObj = {};

for(let i = 0; i < testArr.length; i++) {
  if(dataObj[testArr[i]['weekday']]) {
    dataObj[testArr[i]['weekday']] += testArr[i]['totalEarnedPerItem']
  } else {
    dataObj[testArr[i]['weekday']] = testArr[i]['totalEarnedPerItem']
  }
}

const data = [];

for(let key in dataObj) {
  data.push({year: key, population: dataObj[key]})
}

// const data = [
//     { year: 'Mon', population: 500 },
//     { year: 'Tue', population: 150 },
//     { year: 'Wed', population: 300 },
//     { year: 'Thu', population: 60 },
//     { year: 'Fri', population: 175 },
//     { year: 'Sat', population: 600 },
//     { year: 'Sun', population: 350 },
// ];

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
            <Paper id='testId' className='barchart'>
                <Chart
                    data={chartData}
                >
                    <ArgumentAxis />
                    <ValueAxis tickSize={10} showGrid={false} />

                    <BarSeries
                        valueField="population"
                        argumentField="year"
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



