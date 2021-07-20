import './App.css';
import MainNavigation from './components/MainNavigation/MainNavigation';
import MainContent from './components/MainContent/MainContent';
import ProductModal from './components/ProductModal/ProductModal';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <div className="App">
        <SignIn/>
      {/*<MainNavigation/>*/}
      {/*<MainContent />*/}
      {/*<ProductModal formHeader={'Adding a Product'} btnText={'Save Changes'}/>*/}
      {/*  <ProductModal formHeader={'Creating a Product'} btnText={'Add Product'}/>*/}
    </div>
  );
}

export default App;
