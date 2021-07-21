import { useState } from 'react';

import './App.css';
import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './components/MainContent/MainContent';
import ProductModal from './components/ProductModal/ProductModal';
import SignIn from './components/SignIn/SignIn';
import CreateAccount from "./components/CreateAcc/CreateAccount";


function App() {
    const [createProductModalShow, setCreateProductModalShow] = useState(false);

    const createProductModalHandler = () => {
        setCreateProductModalShow((prev) => !prev);
    };

  return (
    <div className="App">
      <MainNavigation/>

      <MainContent modalShow={createProductModalHandler}/>

        {createProductModalShow && <ProductModal modalClose={createProductModalHandler} formHeader={'Adding a Product'} btnText={'Save Changes'}/>}
      {/*  <ProductModal formHeader={'Creating a Product'} btnText={'Add Product'}/>*/}
    </div>
  );
}
{/*<CreateAccount/>*/}

export default App;
