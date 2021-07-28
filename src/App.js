import {useState, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';

import MainContent from './components/MainContent/MainContent';
import ProductModal from './components/ProductModal/ProductModal';
import SignIn from './components/SignIn/SignIn';
import CreateAccount from "./components/CreateAcc/CreateAccount";

import './App.css';

function App() {
	//My products list arr
	const [itemsListArr, setItemsListArr] = useState([]);
	//My salses list arr
	const [salesListArr, setSalesListArr] = useState([]);

	//Toggle create product modal
	const [createProductModalShow, setCreateProductModalShow] = useState(false);
	//Toggle edit product modal and pass id of chosen product to edit
	const [editProductModalId, setEditProductModalId] = useState(null);

	//Check for routing to Sign in page
	let userLoggedIn = false;
	if (JSON.parse(localStorage.getItem('isCreated')) && JSON.parse(localStorage.getItem('isLoggedIn'))) {
		userLoggedIn = true;
	}

	//Delete item to sell from product list. add it to sell list and push all changes to localStorage arrays
	const saleItemHandler = (id) => {
		const chosenElemForSale = itemsListArr.find((elem) => elem.id === id);

		const dt = new Date();
		const month = dt.getMonth() < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
		const day = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();
		chosenElemForSale.saleDate = `${dt.getFullYear()}.${month}.${day - 3}`;
		//Delete item from My Products list and Local Storage
		deleteItemFromItemsList(id);
		//Add newly added elem to sell list
		setSalesListArr(prev => {
			return [...prev, chosenElemForSale];
		})
		//Add that new elem to local storage
		addSaleslistToLocalStorage(chosenElemForSale);
	}

	//Get Data for ProductList and push to itemsListArr list useState
	useEffect(() => {
		if (localStorage.getItem('productList')) {
			const arrFromStorage = JSON.parse(localStorage.getItem('productList'));
			setItemsListArr(arrFromStorage);
		}
	}, [setItemsListArr]);

	//Get Data for SalesList
	useEffect(() => {
		if (localStorage.getItem('salesList')) {
			const arrFromStorage = JSON.parse(localStorage.getItem('salesList'));
			setSalesListArr(arrFromStorage);
		}
	}, [setSalesListArr]);


	//Add new item from Product List to Local Storage
	const addItemlistToLocalStorage = (arr) => {
		let oldArrFromLocalStorage = JSON.parse(localStorage.getItem('productList')) || [];
		oldArrFromLocalStorage.push(arr);
		localStorage.setItem('productList', JSON.stringify(oldArrFromLocalStorage));
	};

	//Add element transfered to 'My Sales' to the Local storage
	const addSaleslistToLocalStorage = (arr) => {
		const oldArrFromLocalStorage = JSON.parse(localStorage.getItem('salesList')) || [];
		oldArrFromLocalStorage.push(arr);
		localStorage.setItem('salesList', JSON.stringify(oldArrFromLocalStorage));
	};


	//Delete item from My Products list and Local Storage
	const deleteItemFromItemsList = (id) => {
		const newArr = itemsListArr.filter((elem) => elem.id !== id);
		localStorage.setItem('productList', JSON.stringify(newArr));
		setItemsListArr(newArr);
	};

	//Add new elem to My Products list and Local Storage
	const addNewProductToItemsList = (obj) => {
		setItemsListArr((prev) => {
			return [...prev, obj]
		});
		addItemlistToLocalStorage(obj);

		//Close Modal
		createProductModal();
	}

	//Open create product modal
	const createProductModal = () => {
		setCreateProductModalShow((prev) => !prev);
	};

	//Close edit product modal
	const editProductModal = () => {
		setEditProductModalId(null);
	};

	//Open Edit modal and push id of selected product in it
	const edit = (id) => {
		setEditProductModalId(id);
	};

	//Edit elem in My Products list
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

		//Close Edit Product Modal
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
				<ProductModal addToStorage={addItemlistToLocalStorage} addItemProductList={addNewProductToItemsList}
											modalClose={createProductModal} formHeader={'Creating a Product'}
											btnText={'Add Product'}/>}

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
