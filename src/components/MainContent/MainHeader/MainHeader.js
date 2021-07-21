import fileImg from '../../../assets/images/file-img.svg';


import classes from './styles.module.scss';
import CreateProductBtn from "../../CreateProductBtn/CreateProductBtn";

const MainHeader = (props) => {



    return (
        <div className={classes['header-wrapper']}>
            <div className={classes['header-title__block']}>
                <h1 className={classes['header-title']}>{props.title}</h1>
                <span className={classes['header-subtitle']}>{props.subtitle}</span>
            </div>
            <CreateProductBtn modalShow={props.modalShow}/>
        </div>
    )
};

export default MainHeader;