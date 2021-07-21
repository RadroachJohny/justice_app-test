import {useRef} from 'react';
import classes from './styles.module.scss';

import cross from '../../assets/images/cross.png';

const ProductModal = (props) => {
    const modalRef = useRef();

    const overlayClickCheck = (e) => {
        if (e.target === modalRef.current) {
            props.modalClose();
        }
    }

    return (
        <div ref={modalRef} onClick={overlayClickCheck} className={classes['modal-overlay']}>
            <div className={classes['modal-wrapper']}>
                <div className={classes['modal-close']}><img src={cross} alt="close button"/></div>
                <h3 className={classes['modal-title']}>{props.formHeader}</h3>
                <form className={classes['modal-form']}>
                    <input type="text" placeholder='store'/>
                    <input type="text" placeholder='price'/>
                    <input type="text" placeholder='product name'/>
                    <input type="text" placeholder='product category'/>
                    <input type="text" placeholder='quantity of goods'/>
                    <input type="text" placeholder='weight/ volume of one item'/>
                    <button className={classes['modal-submit']} type='submit'>{props.btnText}</button>
                </form>
            </div>
        </div>
    )
}

export default ProductModal;