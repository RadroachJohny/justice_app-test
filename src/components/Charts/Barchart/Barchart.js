import './stylecs.scss';

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

const data = [
    { year: 'Mon', population: 500 },
    { year: 'Tue', population: 150 },
    { year: 'Wed', population: 300 },
    { year: 'Thu', population: 60 },
    { year: 'Fri', population: 175 },
    { year: 'Sat', population: 600 },
    { year: 'Sun', population: 350 },
    { year: 'Sup', population: 350 },
];

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



