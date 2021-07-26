import classes from './styles.module.scss';

import Demo from '../Charts/Linegraph/Linegraph';
import Piechart from "../Charts/Piechart/Piechart";
import Barchart from "../Charts/Barchart/Barchart";

const MainPage = () => {

    return (

        <div className={classes.wrapper}>

            <div className={classes.col1}>
                <div id={'piechart'}  className={`${classes.piechart} ${classes.graph}`}><Piechart/></div>
                <div id={'linegraph'} className={`${classes.linegraph} ${classes.graph}`}><Demo/></div>
            </div>
            <div className={`${classes.barchart} ${classes.graph}`}><Barchart/></div>

        </div>
    )
};

export default MainPage;