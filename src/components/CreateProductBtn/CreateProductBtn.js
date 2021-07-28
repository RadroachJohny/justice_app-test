import classes from "./styles.module.scss";
import fileImg from "../../assets/images/file-img.svg";

const CreateProductBtn = (props) => {

    return <button onClick={props.modalShow} className={classes['header-button']}><img src={fileImg} alt='file'/>Create A Product</button>
};

export default CreateProductBtn;