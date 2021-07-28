import pencil from "../../../assets/images/pencil.svg";
import cross from "../../../assets/images/delete.svg";

import classes from "./styles.module.scss";

const SalesTableBody = (props) => {

    const {
        productName,
        store,
        address,
        category,
        creationDate,
        price,
        remains,
        weightVolume,
        saleDate,
        id
    } = props.data;

    let lastColumnContent = <div className={classes['table-body__controls']}>
        <button onClick={() => props.sale(id)} className={`${classes['table-body__sell']} ${classes['table-body__rowbtn']}`} type='button'>Sell
        </button>
        <button onClick={() => props.edit(id)} className={`${classes['table-body__edit']} ${classes['table-body__rowbtn']}`} type='button'><img
            src={pencil} alt="Edit item"/></button>
        <button onClick={()=> props.onDelete(id)} className={`${classes['table-body__delete']}`} type='button'><img src={cross} alt="Delete item"/>
        </button>
    </div>

    if (saleDate) {
        lastColumnContent = saleDate;
    }
    const tableBodyListClasses = props.index % 2 === 0 ? (`${classes['table-body__list']} ${classes.white}`) : (classes['table-body__list'])

    return (
        <>
        <div className={classes['table-body']}>
            <ul className={tableBodyListClasses}>
                <li>{productName}</li>
                <li>{store}</li>
                <li className={classes.ellipsis}>{address}</li>
                <li>{category}</li>
                <li>{creationDate}</li>
                <li>{price}</li>
                <li>{remains}</li>
                <li>{weightVolume}</li>
                <li>{lastColumnContent}</li>
            </ul>
        </div>
        </>
    )
};

export default SalesTableBody;

