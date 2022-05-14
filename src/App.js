import React, {useState, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';

import MainContent from './components/MainContent/MainContent';
import ProductModal from './components/ProductModal/ProductModal';
import SignIn from './components/SignIn/SignIn';
import CreateAccount from "./components/CreateAcc/CreateAccount";

import './App.css';

function App() {
	const [itemsListArr, setItemsListArr] = useState([]);
	const [salesListArr, setSalesListArr] = useState([]);

	const [createProductModalShow, setCreateProductModalShow] = useState(false);
	const [editProductModalId, setEditProductModalId] = useState(null);

	let userLoggedIn = false;
	if (JSON.parse(localStorage.getItem('isCreated')) && JSON.parse(localStorage.getItem('isLoggedIn'))) {
		userLoggedIn = true;
	}

	useEffect(() => {
		if (localStorage.getItem('productList')) {
			const arrFromStorage = JSON.parse(localStorage.getItem('productList'));
			setItemsListArr(arrFromStorage);
		}
	}, [setItemsListArr]);

	useEffect(() => {
		if (localStorage.getItem('salesList')) {
			const arrFromStorage = JSON.parse(localStorage.getItem('salesList'));
			setSalesListArr(arrFromStorage);
		}
	}, [setSalesListArr]);

  const saleItemHandler = (id) => {
		const chosenElemForSale = itemsListArr.find((elem) => elem.id === id);

		const dt = new Date();
		const month = dt.getMonth() < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
		const day = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();
		chosenElemForSale.saleDate = `${dt.getFullYear()}.${month}.${day}`;
		deleteItemFromItemsList(id);
		setSalesListArr(prev => {
			return [...prev, chosenElemForSale];
		})
		addSaleslistToLocalStorage(chosenElemForSale);
	}

	const addItemlistToLocalStorage = (arr) => {
		let oldArrFromLocalStorage = JSON.parse(localStorage.getItem('productList')) || [];
		oldArrFromLocalStorage.push(arr);
		localStorage.setItem('productList', JSON.stringify(oldArrFromLocalStorage));
	};

	const addSaleslistToLocalStorage = (arr) => {
		const oldArrFromLocalStorage = JSON.parse(localStorage.getItem('salesList')) || [];
		oldArrFromLocalStorage.push(arr);
		localStorage.setItem('salesList', JSON.stringify(oldArrFromLocalStorage));
	};

	const deleteItemFromItemsList = (id) => {
		const newArr = itemsListArr.filter((elem) => elem.id !== id);
		localStorage.setItem('productList', JSON.stringify(newArr));
		setItemsListArr(newArr);
	};

	const addNewProductToItemsList = (obj) => {
		setItemsListArr((prev) => {
			return [...prev, obj]
		});
		addItemlistToLocalStorage(obj);

		createProductModal();
	}

	const createProductModal = () => {
		setCreateProductModalShow((prev) => !prev);
	};

	const editProductModal = () => {
		setEditProductModalId(null);
	};

	const edit = (id) => {
		setEditProductModalId(id);
	};

	const editField = (obj, id) => {
		const arrWithEditedField = itemsListArr.map((elem) => {
			if (elem.id === id) {
				return obj;
			} else {
				return elem;
			}
		});

		localStorage.setItem('productList', JSON.stringify(arrWithEditedField));
		setItemsListArr(arrWithEditedField);

		editProductModal();
	};

	return (
		<>
			{!userLoggedIn && <Redirect to={'/create-account'}/>}

			<div className="App">

				<Route path='/' exact>
					<Redirect to='main-page'/>
				</Route>

				<MainContent
					sale={saleItemHandler}
					itemsList={itemsListArr}
					salesList={salesListArr}
					edit={edit}
					onDelete={deleteItemFromItemsList}
					modalShow={createProductModal}
				/>

				<Route path='/create-account'>
					<CreateAccount/>
				</Route>

				<Route path='/sign-in'>
					<SignIn/>
				</Route>

				{createProductModalShow &&
				<ProductModal 
        addToStorage={addItemlistToLocalStorage} 
        addItemProductList={addNewProductToItemsList}
        modalClose={createProductModal} 
        formHeader={'Creating a Product'}
        btnText={'Add Product'}
        />}

				{editProductModalId &&
				<ProductModal
					edit={editField}
					itemsList={itemsListArr}
					id={editProductModalId}
					modalClose={editProductModal}
					formHeader={'Editing a Product'}
					btnText={'Save Changes'}
				/>
				}
			</div>
		</>
	);
}

export default App;