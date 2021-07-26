import { useRef, useState } from 'react';

import classes from './styles.module.scss';
import useInput from "../hooks/use-input";
import usePassword from '../hooks/use-password';

const isEnoughSymbols = (value) => value.trim().length > 5;

const userInfo = JSON.parse(localStorage.getItem('currentUser'));
const {firstName, lastName, companyName, productCat, address, passwordValue} = userInfo;

const PersonalCabinet = () => {
  const [passwordsIdentical, setPasswordsIdentical] = useState(true);
  const oldPass = useRef();
  

  const { 
    value: firstNameValue, 
    isValid: firstNameIsValid, 
    hasError: firstNameHasError, 
    valueChangeHandler: firstNameChangeHandler, 
    inputBlurHandler: firstNameBlurHandler, 
    reset: resetFirstName ,
  } = useInput(isEnoughSymbols, firstName);
  const { 
    value: lastNameValue, 
    isValid: lastNameIsValid, 
    hasError: lastNameHasError, 
    valueChangeHandler: lastNameChangeHandler, 
    inputBlurHandler: lastNameBlurHandler, 
    reset: resetLastName 
  } = useInput(isEnoughSymbols, lastName);
  const { value: companyNameValue, 
    isValid: companyNameIsValid, 
    hasError: companyNameHasError, 
    valueChangeHandler: companyNameChangeHandler, 
    inputBlurHandler: companyNameBlurHandler, 
    reset: resetCompanyName 
  } = useInput(isEnoughSymbols, companyName);
  const { value: productCatValue, 
    isValid: productCatIsValid, 
    hasError: productCatHasError, 
    valueChangeHandler: productCatChangeHandler, 
    inputBlurHandler: productCatBlurHandler, 
    reset: resetpProductCat 
  } = useInput(isEnoughSymbols, productCat);
  const { value: addressValue, 
    isValid: addressIsValid, 
    hasError: addressHasError, 
    valueChangeHandler: addressChangeHandler, 
    inputBlurHandler: addressBlurHandler, 
    reset: resetpAddress 
  } = useInput(isEnoughSymbols, address);
  const { value: repeatPassValue, 
    isValid: repeatPassIsValid, 
    hasError: repeatPassHasError, 
    errorMessage: repeatPassErrorMessage,
    valueChangeHandler: repeatPassChangeHandler, 
    inputBlurHandler: repeatPassBlurHandler, 
    reset: resetRepeatPass,
  } = usePassword();


    // const userInfo = JSON.parse(localStorage.getItem('currentUser'));

    //To fill input default values
    // const {firstName, lastName, companyName, productCat, address, passwordValue} = userInfo;


    const checkPassIdentity = () => {
      const oldPassword = passwordValue;
      const newPassword = oldPass.current.value;
      return oldPassword === newPassword;
    };

    const checkForm = (e) => {
    e.preventDefault();

    firstNameBlurHandler();
    lastNameBlurHandler();
    companyNameBlurHandler();

    setPasswordsIdentical(checkPassIdentity());




    // const correctOldPass = oldPass.current.value === passwordValue;
    };

    const inputChangeHandler = (e, setState) => {
        const value = e.target.value;
        setState(value);
    }


    const firstNameClasses = firstNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const lastNameClasses = lastNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const companyNameClasses = companyNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
    const newPassword = repeatPassHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;

    //Compare objects
    // JSON.stringify(obj1) === JSON.stringify(obj2)

    return (
        <form className={firstNameClasses}>
            <div className={firstNameClasses}>
                <label htmlFor="firstname">First name</label>
                <input onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler}  id='firstname' type="text" placeholder='First name' value={firstNameValue}/>
                  {firstNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={lastNameClasses}>
                <label htmlFor="lastname">Last name</label>
                <input onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} id='lastname' type="text" placeholder='Last name' value={lastNameValue}/>
                  {lastNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={companyNameClasses}>
                <label htmlFor="companyName">Company name</label>
                <input onChange={companyNameChangeHandler} onBlur={companyNameBlurHandler}  id='companyName' type="text" placeholder='Company name' value={companyNameValue}/>
                  {companyNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="productCategory">Product category</label>
                <input   id='productCategory' type="text" placeholder='Product Category' value={productCatValue}/>
            </div>
            <div className={`${classes['input-block']} ${classes['wide']}`}>
                <label htmlFor="address">Address</label>
                <input  id='address' type="text" placeholder='Address' value={addressValue}/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="oldPass">Enter old password</label>
                <input ref={oldPass} id='oldPass' type="text" placeholder='Enter old password'/>
                {!passwordsIdentical && <p className={classes.errorMes}>Old password is incorrect</p>}
            </div>
            <div className={newPassword}>
                <label htmlFor="newPass">Enter a new password</label>
                <input value={repeatPassValue} onChange={repeatPassChangeHandler} onBlur={repeatPassBlurHandler}  id='newPass' type="text" placeholder='Enter a new password'/>
                {repeatPassHasError && <p className={classes.errorMes}>{repeatPassErrorMessage}</p>}
            </div>
            <button onClick={checkForm} className={classes['cabinet-form__submit']} type='submit'>Save changes</button>
        </form>
    )
 };

export default PersonalCabinet;