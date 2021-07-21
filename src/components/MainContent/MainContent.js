import { Route } from 'react-router-dom';

import MainHeader from './MainHeader/MainHeader';
import PersonalCabinet from '../PersonalCabinet/PersonalCabinet';
import SalesTable from "../SalesTable/SalesTable";

import classes from './style.module.scss';

const title = 'Sales statistics';
const subtitle = 'Welcome to CRM dashboard';

const MainContent = (props) => {
    return (
        <div className={classes.mainWrapper}>
            <SalesTable modalShow={props.modalShow}/>

            <Route path='/personal-cabinet'>
                <MainHeader title={'Personal Cabinet'} subtitle={'Information about account'} modalShow={props.modalShow}/>
                <PersonalCabinet/>
            </Route>


        </div>

    )
}

export default MainContent;