import classes from './styles.module.scss';

import Linegraph from '../Charts/Linegraph/Linegraph';
import Piechart from "../Charts/Piechart/Piechart";
import Barchart from "../Charts/Barchart/Barchart";

const MainPage = (props) => {
	return (

		<div className={classes.wrapper}>
			<div className={classes.col1}>
				<div id={'piechart'} className={`${classes.piechart} ${classes.graph}`}><Piechart itemsList={props.itemsList}/>
				</div>
				<div id={'linegraph'} className={`${classes.linegraph} ${classes.graph}`}><Linegraph
					salesList={props.salesList}/></div>
			</div>
			<div className={`${classes.barchart} ${classes.graph}`}><Barchart salesList={props.salesList}/></div>
		</div>
	)
};

export default MainPage;