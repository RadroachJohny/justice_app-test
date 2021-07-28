import {Route} from 'react-router-dom';

import MainPage from "../MainPage/MainPage";
import MainHeader from './MainHeader/MainHeader';
import PersonalCabinet from '../PersonalCabinet/PersonalCabinet';
import SalesTable from "../SalesTable/SalesTable";
import MainNavigation from "../MainNavigation/MainNavigation";

import classes from './style.module.scss';


const MainContent = (props) => {
    return (
        <>
            <Route path='/main-page'>
                <MainNavigation/>

                <div className={classes.mainWrapper}>
                    <MainHeader title={'Sales statistics'} subtitle={'Welcome to CRM dashboard'}
                                modalShow={props.modalShow}/>
                    <MainPage itemsList={props.itemsList} salesList={props.salesList}/>
                </div>
            </Route>

            <SalesTable salesList={props.salesList} sale={props.sale} onDelete={props.onDelete} itemsList={props.itemsList} edit={props.edit} modalShow={props.modalShow}/>

            <Route path='/personal-cabinet'>
                <MainNavigation/>

                <div className={classes.mainWrapper}>
                    <MainHeader title={'Personal Cabinet'} subtitle={'Information about account'}
                                modalShow={props.modalShow}/>
                    <PersonalCabinet/>
                </div>
            </Route>
        </>

    )
}

export default MainContent;