import React, { useRef } from 'react';

import useInput from "../hooks/use-input";

import cross from '../../assets/images/cross.png';
import classes from './styles.module.scss';



const isEnoughSymbols = (value) => value.trim().length > 4;
const isNumber = (value) => {
  const res = value.match(/^[^0]{1}[0-9]*$/gm);
  return res;
};

const ProductModal = (props) => {

    let defaultValues = {
        store: '',
        price: '',
        productName: '',
        productCat: '',
        quantity: '',
        weightVolume: '',
    }

    if(props.id) {
        const someVar = props.itemsList.find((elem) => elem.id === props.id);
        console.log(someVar);

        defaultValues = {
            store: someVar.store,
            price: someVar.price,
            productName: someVar.productName,
            productCat: someVar.category,
            quantity: someVar.remains,
            weightVolume: someVar.weightVolume,
        }
    }

    const {
        value: storeValue,
        isValid: storeIsValid,
        hasError: storeHasError,
        valueChangeHandler: storeChangeHandler,
        inputBlurHandler: storeBlurHandler,
    } = useInput(isEnoughSymbols, defaultValues.store);
    const {
        value: priceValue,
        isValid: priceIsValid,
        hasError: priceHasError,
        valueChangeHandler: priceChangeHandler,
        inputBlurHandler: priceBlurHandler,
    } = useInput(isNumber, defaultValues.price);
    const {
        value: prodNameValue,
        isValid: prodNameIsValid,
        hasError: prodNameHasError,
        valueChangeHandler: prodNameChangeHandler,
        inputBlurHandler: prodNameBlurHandler,
    } = useInput(isEnoughSymbols, defaultValues.productName);
    const {
        value: prodCatValue,
        isValid: prodCatIsValid,
        hasError: prodCatHasError,
        valueChangeHandler: prodCatChangeHandler,
        inputBlurHandler: prodCatBlurHandler,
    } = useInput(isEnoughSymbols, defaultValues.productCat);
    const {
        value: quantityValue,
        isValid: quantityIsValid,
        hasError: quantityHasError,
        valueChangeHandler: quantityChangeHandler,
        inputBlurHandler: quantityBlurHandler,
    } = useInput(isNumber, defaultValues.quantity);
    const {
        value: weightValue,
        isValid: weightIsValid,
        hasError: weightHasError,
        valueChangeHandler: weightChangeHandler,
        inputBlurHandler: weightBlurHandler,
    } = useInput(isNumber, defaultValues.weightVolume);

    let formIsValid = false;

    if (storeIsValid && priceIsValid && prodNameIsValid && prodCatIsValid && quantityIsValid && weightIsValid) {
        formIsValid = true;
    }

    const modalOverlayRef = useRef();

    const overlayClickCheck = (e) => {
        if (e.target === modalOverlayRef.current) {
            props.modalClose();
        }
    }


    const dt = new Date();
    const month = dt.getMonth() < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
    const day = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();

    const universalFunc = (e, actionArg) => {
        e.preventDefault();

        storeBlurHandler();
        priceBlurHandler();
        prodNameBlurHandler();
        prodCatBlurHandler();
        quantityBlurHandler();
        weightBlurHandler();

        if(!formIsValid) {
            return;
        }

        const dt = new Date();

        props[actionArg]({
            store: storeValue,
            price: priceValue,
            productName: prodNameValue,
            category: prodCatValue,
            remains: quantityValue,
            weightVolume: weightValue,
            creationDate: `${dt.getFullYear()}.${month}.${day}`,
            id: +Date.now(),
        }, props.id)
    };


    const storeClass = storeHasError ? `${classes.inputWrapper} ${classes.texterror}` : '';
    const priceClass = priceHasError ? `${classes.inputWrapper} ${classes.numerror}` : '';
    const prodNameClass = prodNameHasError ? `${classes.inputWrapper} ${classes.texterror}` : '';
    const prodCatClass = prodCatHasError ? `${classes.inputWrapper} ${classes.texterror}` : '';
    const quantityClass = quantityHasError ? `${classes.inputWrapper} ${classes.numerror}` : '';
    const weightClass = weightHasError ? `${classes.inputWrapper} ${classes.numerror}` : '';

    return (
        <div ref={modalOverlayRef} onClick={overlayClickCheck} className={classes['modal-overlay']}>
            <div className={classes['modal-wrapper']}>
                <div onClick={props.modalClose}   className={classes['modal-close']}><img src={cross} alt="close button"/></div>
                <h3 className={classes['modal-title']}>{props.formHeader}</h3>
                <form className={classes['modal-form']}>


                    <div className={storeClass}> 
                    <input
                    value={storeValue} 
                    onChange={storeChangeHandler} 
                    onBlur={storeBlurHandler}
                    type="text" 
                    placeholder='store' ></input></div>

                     <div className={priceClass}>
                    <input 
                    value={priceValue} 
                    onChange={priceChangeHandler} 
                    onBlur={priceBlurHandler} 
                    type="text" 
                    placeholder='price'></input></div>

                    <div className={prodNameClass}>
                    <input 
                    value={prodNameValue} 
                    onChange={prodNameChangeHandler} 
                    onBlur={prodNameBlurHandler}
                    type="text" 
                    placeholder='product name'></input></div>

                    <div className={prodCatClass}>  
                    <input value={prodCatValue} 
                    onChange={prodCatChangeHandler} 
                    onBlur={prodCatBlurHandler}
                    type="text" 
                    placeholder='product category'></input></div>

                    <div className={quantityClass}>
                    <input 
                    value={quantityValue} 
                    onChange={quantityChangeHandler} 
                    onBlur={quantityBlurHandler}  
                    type="text" 
                    placeholder='quantity of goods'/></div>

                    <div className={weightClass}>
                    <input 
                    value={weightValue} 
                    onChange={weightChangeHandler} 
                    onBlur={weightBlurHandler}  
                    type="text"
                    placeholder='weight/ volume of one item'/></div>

                    <button 
                    onClick={(e) => {
                        return !props.id ? universalFunc(e, 'addItemProductList') : universalFunc(e, 'edit');
                    }} className={classes['modal-submit']} type='submit'>{props.btnText}</button>
                </form>
            </div>
        </div>
    )
}

export default ProductModal;