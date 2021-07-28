import classes from "../styles.module.scss";

const TableHead = (props) => {
  const productElement = [
    { name: "Product name" },
    { name: "Store" }, 
    { name: "Address" }, 
    { name: "Category" }, 
    { name: "Creation date" },
    { name: "Price" }, 
    { name: props.amount }, 
    { name: "Weight/Volume" }, 
    { name: props.actions }
  ];

  return (
    <div className={classes["table-head"]}>
      <ul className={classes["table-head__list"]}>
        {productElement.map(({ name }) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default TableHead;

