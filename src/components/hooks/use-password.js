import { useState } from 'react';

const usePassword = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  
  let errorMessage = '';

  const valueIsValid = () => {
    if (enteredValue.length < 10) {
      errorMessage = 'Password should be atleast 10 symbols';
      return false;
    } else if (!/[!@#$%^&*()_+|]/.test(enteredValue)) {
      errorMessage = 'Enter atleast 1 special symbol - !@#$%^&*()_+|';
      return false;
    }
    return true;

  };

  const hasError = !valueIsValid() && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid(),
    hasError,
    errorMessage,
    valueChangeHandler,
    inputBlurHandler,
    reset,


  };

};

export default usePassword;