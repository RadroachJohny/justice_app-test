import {useRef} from 'react';
import classes from './styles.module.scss';
import cross from '../../assets/images/cross.png';

const ProductModal = (props) => {
    const modalOverlayRef = useRef();

    const store =  useRef();
    const price = useRef();
    const productName = useRef();
    const productCat =  useRef();
    const quantity =  useRef();
    const weight =  useRef();

    console.log(props.id)

    const overlayClickCheck = (e) => {
        if (e.target === modalOverlayRef.current) {
            props.modalClose();
        }
    }

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
            category: someVar.category,
            remains: someVar.remains,
            weightVolume: someVar.weightVolume,
        }

    }

    const formSubmit = (e) => {
        console.log('form submit');
        e.preventDefault();

        const dt = new Date();

        const month = dt.getMonth() < 10 ? `0${dt.getMonth() + 1}` : dt.getMonth() + 1;
        const day = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate();

        props.addItemProductList({
            store: store.current.value,
            price: price.current.value,
            productName: productName.current.value,
            category: productCat.current.value,
            remains: quantity.current.value,
            weightVolume: weight.current.value,
            creationDate: `${dt.getFullYear()}.${month}.${day}`,
            id: +Date.now(),
        })

    };

    const editElem = (e) => {
        e.preventDefault();

        const dt = new Date();

        props.edit({
            store: store.current.value,
            price: price.current.value,
            productName: productName.current.value,
            category: productCat.current.value,
            remains: quantity.current.value,
            weightVolume: weight.current.value,
            creationDate: `${dt.getDate()}.${dt.getMonth() + 1}.${dt.getFullYear()}`,
            id: +Date.now(),
        }, props.id)
    };

    console.log(defaultValues.store);
    return (
        <div ref={modalOverlayRef} onClick={overlayClickCheck} className={classes['modal-overlay']}>
            <div className={classes['modal-wrapper']}>
                <div onClick={props.modalClose}   className={classes['modal-close']}><img src={cross} alt="close button"/></div>
                <h3 className={classes['modal-title']}>{props.formHeader}</h3>
                <form className={classes['modal-form']}>

                    <input ref={store} type="text" placeholder='store' defaultValue={defaultValues.store}></input>
                    <input ref={price} type="text" placeholder='price' defaultValue={defaultValues.price}></input>
                    <input ref={productName} type="text" placeholder='product name' defaultValue={defaultValues.productName}></input>
                    <input ref={productCat} type="text" placeholder='product category' defaultValue={defaultValues.category}></input>
                    <input ref={quantity} type="text" placeholder='quantity of goods' defaultValue={defaultValues.remains}></input>
                    <input ref={weight} type="text" placeholder='weight/ volume of one item' defaultValue={defaultValues.weightVolume}></input>

                    <button onClick={(e) => {
                        return !props.id ? formSubmit(e) : editElem(e);
                    }} className={classes['modal-submit']} type='submit'>{props.btnText}</button>
                </form>
            </div>
        </div>
    )
}

export default ProductModal;