import {Legend} from '@devexpress/dx-react-chart-material-ui';
import {withStyles} from '@material-ui/core/styles';

import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	PieSeries,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import {Animation} from '@devexpress/dx-react-chart';

import './styles.scss';

//Template
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

const legendRootBase = ({classes, ...restProps}) => (
	<Legend.Root {...restProps} className={classes.root}/>
);
const legendLabelBase = ({classes, ...restProps}) => (
	<Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({classes, ...restProps}) => (
	<Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, {name: 'LegendRoot'})(legendRootBase);
const Label = withStyles(legendLabelStyles, {name: 'LegendLabel'})(legendLabelBase);
const Item = withStyles(legendItemStyles, {name: 'LegendItem'})(legendItemBase);


const Piechart = (props) => {
	const data = [...props.itemsList];
	const chartData = data.splice(-4);

	console.log(chartData);

	return (
		<>

			<Paper className='height100'>
          {chartData.length >= 2 &&<Chart className='fit'
							 data={chartData}
				>

					<Title
						text="Sales schedule by day"
					/>

					<PieSeries
						valueField="remains"
						argumentField="productName"
					/>

					<Animation/>
					<Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label}/>

				</Chart>}
          {chartData.length < 2 && <p className='noData'>No Data</p>}
			</Paper>
		</>

	);
}

export default Piechart;