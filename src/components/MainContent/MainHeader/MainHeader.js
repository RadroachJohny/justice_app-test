import CreateProductBtn from "../../CreateProductBtn/CreateProductBtn";
import classes from './styles.module.scss';

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