import {Route} from 'react-router-dom';

import classes from './styles.module.scss';

import TableHead from "./TableHead/TableHead";
import SalesTableBody from "./SalesTableBody/SalesTableBody";
import MainHeader from "../MainContent/MainHeader/MainHeader";
import MainNavigation from "../MainNavigation/MainNavigation";


const SalesTable = (props) => {
	return (
		<>
			<Route path='/sales-statistics'>
				<MainNavigation/>

				<div className={classes.mainWrapper}>
					<MainHeader title={'My product'} subtitle={'IProduct table'} modalShow={props.modalShow}/>

					<div className={classes['table-wrapper']}>
						<TableHead amount={'Remains'} actions={'Actions'}/>
						{props.itemsList.map((elem, i) => (
							<SalesTableBody sale={props.sale} onDelete={props.onDelete} edit={props.edit} key={elem.id} data={elem}
															index={i}/>
						))}
					</div>
				</div>
			</Route>

			<Route path='/my-sales'>
				<MainNavigation/>

				<div className={classes.mainWrapper}>

					<MainHeader title={'My sales'} subtitle={'Sales table'} modalShow={props.modalShow}/>

					<div className={classes['table-wrapper']}>
						<TableHead amount={'Sold Items'} actions={'Last Sale'}/>

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

