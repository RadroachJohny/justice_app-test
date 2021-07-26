import { useRef, useState } from 'react';

import classes from './styles.module.scss';
import useInput from "../hooks/use-input";

const isEnoughSymbols = (value) => value.trim().length > 5;

const userInfo = JSON.parse(localStorage.getItem('currentUser'));
const {firstName, lastName, companyName, productCat, address, passwordValue} = userInfo;

const PersonalCabinet = () => {
    const [firstNameVal, setFirstNameVal] = useState(firstName);
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastNameVal, setLastNameVal] = useState(lastName);
    const [lastNameError, setLastNameError] = useState(false);

    const [companyNameVal, setCompanyNameVal] = useState(companyName);
    const [companyNameError, setCompanyNameError] = useState(false);

    const [productCatVal, setProductCatVal] = useState(productCat);
    const [addressVal, setAddressVal] = useState(address);


     let firstNameHasError = false
     let lastNameHasError = false
     let companyNameHasError = false
    // const oldPass = useRef();
    // const newPass = useRef();


    // const userInfo = JSON.parse(localStorage.getItem('currentUser'));

    //To fill input default values
    // const {firstName, lastName, companyName, productCat, address, passwordValue} = userInfo;


    const checkForm = (e) => {
    e.preventDefault();

    if (isEnoughSymbols(firstNameVal)) {
        console.log(1111)
        setFirstNameError(false);
    } else {
        console.log(222)
        setFirstNameError(true);
    }

    if (isEnoughSymbols(lastNameVal)) {
        console.log(1111)
        setLastNameError(false);
    } else {
        console.log(222)
        setLastNameError(true);
    }

    if (isEnoughSymbols(companyNameVal)) {
        console.log(1111)
        setCompanyNameError(false);
    } else {
        console.log(222)
        setCompanyNameError(true);
    }



    // const correctOldPass = oldPass.current.value === passwordValue;
    };

    const inputChangeHandler = (e, setState) => {
        const value = e.target.value;
        setState(value);
    }


    const firstNameClasses = firstNameError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const lastNameClasses = lastNameError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const companyNameClasses = companyNameError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;

    //Compare objects
    // JSON.stringify(obj1) === JSON.stringify(obj2)

    return (
        <form className={classes['cabinet-form']}>
            <div className={firstNameClasses}>
                <label htmlFor="firstname">First name</label>
                <input onChange={(e) => inputChangeHandler(e, setFirstNameVal)}  id='firstname' type="text" placeholder='First name' value={firstNameVal}/>
            </div>
            <div className={lastNameClasses}>
                <label htmlFor="lastname">Last name</label>
                <input onChange={(e) => inputChangeHandler(e, setLastNameVal)} id='lastname' type="text" placeholder='Last name' value={lastNameVal}/>
            </div>
            <div className={companyNameClasses}>
                <label htmlFor="companyName">Company name</label>
                <input onChange={(e) => inputChangeHandler(e, setCompanyNameVal)} id='companyName' type="text" placeholder='Company name' value={companyNameVal}/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="productCategory">Product category</label>
                <input onChange={(e) => inputChangeHandler(e, setProductCatVal)} id='productCategory' type="text" placeholder='Product Category' value={productCatVal}/>
            </div>
            <div className={`${classes['input-block']} ${classes['wide']}`}>
                <label htmlFor="address">Address</label>
                <input onChange={(e) => inputChangeHandler(e, setAddressVal)} id='address' type="text" placeholder='Address' value={addressVal}/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="oldPass">Enter old password</label>
                <input  id='oldPass' type="text" placeholder='Enter old password'/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="newPass">Enter a new password</label>
                <input  id='newPass' type="text" placeholder='Enter a new password'/>
            </div>
            <button onClick={checkForm} className={classes['cabinet-form__submit']} type='submit'>Save changes</button>
        </form>
    )
 };

export default PersonalCabinet;