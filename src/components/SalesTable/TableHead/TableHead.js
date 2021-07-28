import classes from "../styles.module.scss";

const TableHead = (props) => {
    const productElement = [
        {name: 'Product name'},
        {},
        {},
        {},
    ]

    return (
        <div className={classes['table-head']}>
            <ul className={classes['table-head__list']}>
                {/*{productElement.map(({name}) => (*/}
                {/*  <li>{name}</li>*/}
                {/*))}*/}
                <li>Product name</li>
                <li>Store</li>
                <li>Address</li>
                <li>Category</li>
                <li>Creation date</li>
                <li>Price</li>
                <li>{props.amount}</li>
                <li>Weight/Volume</li>
                <li>{props.actions}</li>
            </ul>
        </div>
    )
};

export default TableHead;

