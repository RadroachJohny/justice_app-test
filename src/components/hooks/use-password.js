import { useState } from 'react';

const usePassword = () => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  
  let errorMessage = '';

  const valueIsValid = () => {
    if (enteredValue.length < 6) {
      errorMessage = 'should be min 6 letters';
      return false;
    } else if (!/[!@#$%^&]/.test(enteredValue)) {
      errorMessage = 'should include min 1 any spec symbol (!@#$%^&)';
      return false;
    } else if (!/[a-z]/.test(enteredValue)) {
      errorMessage = 'should include min 1 english lower case letter';
      return false;
    } else if (!/[A-Z]/.test(enteredValue)) {
      errorMessage = 'should include min 1 english upper case letter';
      return false;
    }
    return true;

  };

  const hasError = !valueIsValid() && isTouched;

  const valueChangeHandler = (event) => {
    if(event) {
      console.log('01');
      setEnteredValue(event.target.value);
    } else if (!isTouched) {
      console.log('02');
      setEnteredValue('');
      setIsTouched(true);
    }

  }
  console.log(enteredValue);

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