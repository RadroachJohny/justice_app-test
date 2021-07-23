import { useState } from 'react';
import {Route} from 'react-router-dom';

import classes from './styles.module.scss';

import {SalesArr} from '../../ProductData/ProductSales';

import SalesTableBody from "./SalesTableBody/SalesTableBody";
import MainHeader from "../MainContent/MainHeader/MainHeader";
import MainNavigation from "../MainNavigation/MainNavigation";


const SalesTable = (props) => {
    const [itemsArrState, setItemsArr] = useState(props.itemsList);

    const deleteItemFromSalesList = (id) => {
        const newArr = itemsArrState.filter((elem) => elem.id !== id);
        setItemsArr(newArr)
    };

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
                        {props.itemsList.map((elem, i) => (
                            <SalesTableBody sale={props.sale} onDelete={props.onDelete} edit={props.edit} key={elem.id} data={elem} index={i}/>
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
                                <li>Sold Items</li>
                                <li>Weight/Volume</li>
                                <li>Last Sale</li>
                            </ul>
                        </div>

                        {props.salesList.map((elem, i) => (
                            <SalesTableBody key={elem.id} data={elem} index={i}/>
                        ))}

                    </div>
                </div>
            </Route>
        </>
    )
}

export default SalesTable;

