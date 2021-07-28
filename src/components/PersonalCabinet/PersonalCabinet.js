import {useRef, useState} from 'react';

import classes from './styles.module.scss';
import useInput from "../hooks/use-input";
import usePassword from '../hooks/use-password';

const isEnoughSymbols = (value) => value.trim().length > 5;


const PersonalCabinet = () => {
    const [currUser, setCurrUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || {});
    const [passwordsIdentical, setPasswordsIdentical] = useState(true);
    const [oldPassFieldValue, setOldPassFieldValue] = useState('');

    const productCatVal = useRef();
    const addressVal = useRef();
    const oldPass = useRef();

    const {firstName = '', lastName = '', companyName = '', email = '', productCat = '', address = '', passwordValue = ''} = currUser;

    const {
        value: firsNameVal,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
    } = useInput(isEnoughSymbols, firstName);
    const {
        value: lasNameVal,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
    } = useInput(isEnoughSymbols, lastName);
    const {
        value: compNameVal,
        isValid: companyNameIsValid,
        hasError: companyNameHasError,
        valueChangeHandler: companyNameChangeHandler,
        inputBlurHandler: companyNameBlurHandler,
    } = useInput(isEnoughSymbols, companyName);
    const { value: productCatValue,
      isValid: productCatIsValid,
      hasError: productCatHasError,
      valueChangeHandler: productCatChangeHandler,
      inputBlurHandler: productCatBlurHandler,
    } = useInput(isEnoughSymbols, productCat);
    const { value: addressValue,
      isValid: addressIsValid,
      hasError: addressHasError,
      valueChangeHandler: addressChangeHandler,
      inputBlurHandler: addressBlurHandler,
    } = useInput(isEnoughSymbols, address);
    const {
        value: newPasVal,
        isValid: repeatPassIsValid,
        hasError: newPassHasError,
        errorMessage: newPassErrorMessage,
        valueChangeHandler: newPassChangeHandler,
        inputBlurHandler: newPassBlurHandler,
        reset: resetNewPass,
    } = usePassword();


    let formIsValid = false;

    if (firstNameIsValid && lastNameIsValid && companyNameIsValid && productCatIsValid && addressIsValid && passwordsIdentical) {
        formIsValid = true;
    }

    const checkPassIdentity = () => {
        const oldPassword = passwordValue;
        const newPassword = oldPass.current.value;
        return oldPassword === newPassword;
    };


    const checkForm = () => {
        firstNameBlurHandler();
        lastNameBlurHandler();
        companyNameBlurHandler();
        productCatBlurHandler();
        addressBlurHandler();
        newPassBlurHandler();
        setPasswordsIdentical(checkPassIdentity());
    };

    const pushNewUserDataToLocalStorage = (newUser) => {
        const allUsersArr = JSON.parse(localStorage.getItem('users'));
        const newUsersArr = allUsersArr.map(elem => {
            if (elem.passwordValue === oldPass.current.value) {
                return newUser;
            }
            return elem;
        })

        localStorage.setItem('users', JSON.stringify(newUsersArr));
        localStorage.setItem('currentUser', JSON.stringify(newUser));
        setCurrUser(JSON.parse(localStorage.getItem('currentUser')));

    };

    const submit = (e) => {
        e.preventDefault();

        if (!formIsValid || !passwordsIdentical) {
            return;
        }

        const newUserData = {
            firstName: firsNameVal,
            lastName: lasNameVal,
            companyName: compNameVal,
            productCat: productCatVal.current.value,
            email,
            address: addressVal.current.value,
            passwordValue: newPasVal,
        }

        pushNewUserDataToLocalStorage(newUserData);
        resetNewPass();
        setOldPassFieldValue('');

    };

    const oldPassChangeHandler = (e) => {
        setOldPassFieldValue(e.target.value);
    };

    const firstNameClasses = firstNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const lastNameClasses = lastNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const companyNameClasses = companyNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const newPassword = newPassHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const productCategoryName = productCatHasError ? `${classes["input-block"]``} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const addressName = addressHasError ? `${classes["input-block"]} ${classes["invalid"]} ${classes['wide']}` : `${classes['wide']} ${classes["input-block"]}`;

    return (
        <form onSubmit={submit} className={classes['cabinet-form']}>
            <div className={firstNameClasses}>
                <label htmlFor="firstname">First name</label>
                <input onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} id='firstname' type="text"
                       placeholder='First name' value={firsNameVal}/>
                {firstNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={lastNameClasses}>
                <label htmlFor="lastname">Last name</label>
                <input onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} id='lastname' type="text"
                       placeholder='Last name' value={lasNameVal}/>
                {lastNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={companyNameClasses}>
                <label htmlFor="companyName">Company name</label>
                <input onChange={companyNameChangeHandler} onBlur={companyNameBlurHandler} id='companyName' type="text"
                       placeholder='Company name' value={compNameVal}/>
                {companyNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={productCategoryName}>
                <label htmlFor="productCategory">Product category</label>
                <input onChange={productCatChangeHandler} onBlur={productCatBlurHandler} value={productCatValue} id='productCategory' type="text" placeholder='Product Category' ref={productCatVal}/>
                {productCatHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={addressName}>
                <label htmlFor="address">Address</label>
                <input onChange={addressChangeHandler} onBlur={addressBlurHandler} value={addressValue} id='address' type="text" placeholder='Address' ref={addressVal}/>
                {addressHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="oldPass">Enter old password</label>
                <input ref={oldPass} value={oldPassFieldValue} onChange={oldPassChangeHandler} id='oldPass' type="text" placeholder='Enter old password'/>
                {!passwordsIdentical && <p className={classes.errorMes}>Old password is incorrect</p>}
            </div>
            <div className={newPassword}>
                <label htmlFor="newPass">Enter a new password</label>
                <input value={newPasVal} onChange={newPassChangeHandler} onBlur={newPassBlurHandler} id='newPass'
                       type="text" placeholder='Enter a new password'/>
                {newPassHasError && <p className={classes.errorMes}>{newPassErrorMessage}</p>}
            </div>
            <button onClick={checkForm} className={classes['cabinet-form__submit']} type='submit'>Save changes</button>
        </form>
    )
};

export default PersonalCabinet;