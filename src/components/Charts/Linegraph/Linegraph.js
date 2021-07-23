import './styles.scss';

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';



export const data = [
    {
        year: 1993, military: 32,
    }, {
        year: 1995, military: 33,
    }, {
        year: 1997, military: 30,
    }, {
        year: 1999, military: 34,
    }, {
        year: 2001, military: 33,
    }, {
        year: 2003, military: 30,
    }, {
        year: 2006, military: 32,
    }, {
        year: 2008, military: 30,
    }, {
        year: 2010, military: 32,
    }, {
        year: 2012, military: 33,
    },
];

const format = () => tick => tick;
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
const demoStyles = () => ({
    chart: {
        paddingRight: '62px',
        paddingLeft: '32px',
    },
    title: {
        whiteSpace: 'pre',
    },
});

const ValueLabel = (props) => {
    const { text } = props;
    return (
        <ValueAxis.Label
            {...props}
            text={`${text}`}
        />
    );
};

const titleStyles = {
    title: {
        whiteSpace: 'pre',
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '18px',
        fontFamily: 'Inter'
    },
};
const TitleText = withStyles(titleStyles)(({ classes, ...props }) => (
    <Title.Text {...props} className={classes.title} />
));

class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data,
        };
    }

    render() {
        const { data: chartData } = this.state;
        const { classes } = this.props;

        return (
            <Paper className='line-height100'>
                <Chart
                    className={`${'line-height100'} ${'paddingLR'}`}
                    data={chartData}
                    // className={classes.chart}
                >
                    {/*<ArgumentAxis tickFormat={format} />*/}

                    {/*<ValueAxis*/}
                    {/*    max={50}*/}
                    {/*    labelComponent={ValueLabel}*/}
                    {/*/>*/}

                    <LineSeries
                        className='line-height100'
                        name="$106,000"
                        valueField="military"
                        argumentField="year"
                    />
                    <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                    <Title
                        text={`Total earned`}
                        textComponent={TitleText}
                    />
                    <Animation />
                </Chart>
            </Paper>
        );
    }
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);