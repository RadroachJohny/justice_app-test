import {Route} from 'react-router-dom';

import classes from './styles.module.scss';

import {itemsArr} from '../../ProductData/ProductData';

import SalesTableBody from "./SalesTableBody/SalesTableBody";
import MainHeader from "../MainContent/MainHeader/MainHeader";
import MainNavigation from "../MainNavigation/MainNavigation";

//For visual differentiation of two tables (My Products & My Sales)
const newArr = [...itemsArr].reverse();

const SalesTable = (props) => {
    return (
        <>
            <Route path='/sales-statistics'>
                <MainNavigation/>

                <div className={classes.mainWrapper}>

                <MainHeader title={'My product'} subtitle={'IProduct table'} modalShow={props.modalShow}/>
                <div className={classes['table-wrapper']}>
                    <div className={classes['table-head']}>
                        <ul className={classes['table-head__list']}>
                            <li>Product name</li>
                            <li>Store</li>
                            <li>Address</li>
                            <li>Category</li>
                            <li>Creation date</li>
                            <li>Price</li>
                            <li>Remains</li>
                            <li>Weight/Volume</li>
                            <li>Actions</li>
                        </ul>
                    </div>
                    {itemsArr.map((elem, i) => (
                        <SalesTableBody key={Math.random() * 1000} data={elem} index={i}/>
                    ))}
                </div>
                </div>


            </Route>
            <Route path='/my-sales'>
                <MainNavigation/>

                <div className={classes.mainWrapper}>
                <MainHeader title={'My sales'} subtitle={'Sales table'} modalShow={props.modalShow}/>
                <div className={classes['table-wrapper']}>

                    <div className={classes['table-head']}>
                        <ul className={classes['table-head__list']}>
                            <li>Product name</li>
                            <li>Store</li>
                            <li>Address</li>
                            <li>Category</li>
                            <li>Creation date</li>
                            <li>Price</li>
                            <li>Remains</li>
                            <li>Weight/Volume</li>
                            <li>Last Sale</li>
                        </ul>
                    </div>
                    {newArr.map((elem, i) => (
                        <SalesTableBody key={Math.random() * 1000} data={elem} index={i}/>
                    ))}

                </div>
                </div>
            </Route>

        </>
    )
}

export default SalesTable;

