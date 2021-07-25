import { useState, useEffect } from "react";

import useInput from "../hooks/use-input";
import usePassword from "../hooks/use-password";

import classes from "./styles.module.scss";

import banner from "../../assets/images/banner.jpg";

const isEnoughSymbols = (value) => value.trim().length > 5;
const isEmail = (value) => value.includes("@");

const CreateAccount = () => {
  const [passwords, setPasswords] = useState({pass1: '', pass2: ''});
  const [passwordsNotIdentical, setPasswordsNotIdentical] = useState(false);

  useEffect(()=> {
    if (passwords.pass1 && passwords.pass2 && passwords.pass1 !== passwords.pass2) {
      setPasswordsNotIdentical(true);
    } else {
      setPasswordsNotIdentical(false);
    }
  }, [passwords]);

  const { 
    value: firstNameValue, 
    isValid: firstNameIsValid, 
    hasError: firstNameHasError, 
    valueChangeHandler: firstNameChangeHandler, 
    inputBlurHandler: firstNameBlurHandler, 
    reset: resetFirstName ,
  } = useInput(isEnoughSymbols);
  const { 
    value: lastNameValue, 
    isValid: lastNameIsValid, 
    hasError: lastNameHasError, 
    valueChangeHandler: lastNameChangeHandler, 
    inputBlurHandler: lastNameBlurHandler, 
    reset: resetLastName 
  } = useInput(isEnoughSymbols);
  const { value: companyNameValue, 
    isValid: companyNameIsValid, 
    hasError: companyNameHasError, 
    valueChangeHandler: companyNameChangeHandler, 
    inputBlurHandler: companyNameBlurHandler, 
    reset: resetCompanyName 
  } = useInput(isEnoughSymbols);
  const { value: emailValue, 
    isValid: emailIsValid, 
    hasError: emailHasError, 
    valueChangeHandler: emailChangeHandler, 
    inputBlurHandler: emailBlurHandler, 
    reset: resetEmail 
  } = useInput(isEmail);
  const { value: passwordValue, 
    isValid: passwordIsValid, 
    hasError: passwordHasError, 
    errorMessage: passErrorMessage,
    valueChangeHandler: passwordChangeHandler, 
    inputBlurHandler: passwordBlurHandler, 
    reset: resetPassword,
  } = usePassword();
  const { value: repeatPassValue, 
    isValid: repeatPassIsValid, 
    hasError: repeatPassHasError, 
    errorMessage: repeatPassErrorMessage,
    valueChangeHandler: repeatPassChangeHandler, 
    inputBlurHandler: repeatPassBlurHandler, 
    reset: resetRepeatPass,
  } = usePassword();

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && companyNameIsValid && emailIsValid && passwordIsValid && repeatPassIsValid && !passwordsNotIdentical) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
  const lastNameClasses = lastNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
  const companyNameClasses = companyNameHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
  const emailClasses = emailHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
  const passwordClasses = passwordHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;
  const repeatPasswordClasses = repeatPassHasError ? `${classes["input-block"]} ${classes["invalid"]}` : `${classes["input-block"]}`;


  const formValidation = (e) => {
    e.preventDefault();

    if (!formIsValid || passwordsNotIdentical) {
      return;
    }

    console.log(firstNameValue, lastNameValue, companyNameValue, emailValue, passwordValue, repeatPassValue);

    resetFirstName();
    resetLastName();
    resetCompanyName();
    resetEmail();
    resetPassword();
    resetRepeatPass();
    setPasswordsNotIdentical(false);
  };

  const setPasswordForComparison = (e) => (pass, blurHandler) => {
    blurHandler(e);
    setPasswords((prev) => {
      return {...prev, [pass]: e.target.value}
    })
  };


  return (
    <div className={classes.main}>
      <div className={classes["form-wrapper"]}>
        <div className={classes["form-block"]}>
          <p className={classes["form-title"]}>Create an account</p>

          <form onSubmit={formValidation} className={classes.form}>
            <div className={classes["username-block"]}>
              <div className={firstNameClasses}>
                <label htmlFor="firstName">First name</label>
                <input value={firstNameValue} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} id="firstName" type="text" placeholder="First name" />
                {firstNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
              </div>
              <div className={lastNameClasses}>
                <label htmlFor="lastName">Last name</label>
                <input value={lastNameValue} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} id="lastName" type="text" placeholder="Last name" />
                {lastNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
              </div>
            </div>
            <div className={companyNameClasses}>
              <label htmlFor="companyName">Company name</label>
              <input value={companyNameValue} onChange={companyNameChangeHandler} onBlur={companyNameBlurHandler} id="companyName" type="text" placeholder="Company name" />
              {companyNameHasError && <p className={classes.errorMes}>Should be more than 5 letters</p>}
            </div>
            <div className={emailClasses}>
              <label htmlFor="email">Email</label>
              <input value={emailValue} onChange={emailChangeHandler} onBlur={emailBlurHandler} id="email" type="text" placeholder="Email" />
              {emailHasError && <p className={classes.errorMes}>Please enter a valid email address</p>}
            </div>
            <div className={passwordClasses}>
              <label htmlFor="password">Password</label>
              <input  value={passwordValue} onChange={passwordChangeHandler} onBlur={(e) => setPasswordForComparison.call(null, e)('pass1', passwordBlurHandler)} id="password" type="password" placeholder="Password" />
              {passwordHasError && <p className={classes.errorMes}>{passErrorMessage}</p>}
              {passwordsNotIdentical && <p className={classes.identicalError}>Passwords should be identical</p>}
            </div>
            <div className={repeatPasswordClasses}>
              <label htmlFor="resetpassword">Repeat password</label>
              <input value={repeatPassValue} onChange={repeatPassChangeHandler} onBlur={(e) => setPasswordForComparison.call(null, e)('pass2', repeatPassBlurHandler)} id="resetpassword" type="password" placeholder="Repeat password" />
              {repeatPassHasError && <p className={classes.errorMes}>{repeatPassErrorMessage}</p>}
              {passwordsNotIdentical && <p className={classes.identicalError}>Passwords should be identical</p>}
            </div>
            <button disabled={!formIsValid} onClick={formValidation} className={classes["form-submit"]} type="submit">
              Create account
            </button>

            <div className={classes["login-block"]}>
              <p>Already have an account?</p>
              <a className={classes.login} href="www.random.com">
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.banner}>
        <img src={banner} alt="Justice team banner" />
      </div>
    </div>
  );
};

export default CreateAccount;
