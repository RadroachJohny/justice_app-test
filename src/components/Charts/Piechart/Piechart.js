import './styles.scss';

import { Legend } from '@devexpress/dx-react-chart-material-ui';


import { withStyles } from '@material-ui/core/styles';


import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

const productArr = JSON.parse(localStorage.getItem('productList'));
const data = productArr.splice(-4) || [];

// const data = [
//     { country: 'Canada', area: 7 },
//     { country: 'USA', area: 7 },
//     { country: 'Australia', area: 5 },
//     { country: 'Others', area: 55 },
// ];


const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
const legendLabelStyles = theme => ({
    label: {
        paddingTop: theme.spacing(1),
        whiteSpace: 'nowrap',
    },
});
const legendItemStyles = () => ({
    item: {
        flexDirection: 'column',
    },
});

const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);




class Piechart extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;

        return (
            <>

            <Paper className='height100'>
                <Chart className='fit'
                    data={chartData}
                >

                    <Title
                        text="Sales schedule by day"
                    />

                    <PieSeries
                        valueField="remains"
                        // valueField="area"
                        argumentField="productName"
                        // argumentField="country"
                    />


                    <Animation />
                    <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label}/>
                    {!data.length && <p className='noData'>No Data</p>}
                </Chart>

            </Paper>
            </>

        );
    }
}

export default Piechart;
