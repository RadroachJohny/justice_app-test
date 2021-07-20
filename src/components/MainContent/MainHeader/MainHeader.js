import fileImg from '../../../assets/images/file-img.svg';

import classes from './styles.module.scss';

const MainHeader = (props) => {
    return (
        <div className={classes['header-wrapper']}>
            <div className={classes['header-title__block']}>
                <h1 className={classes['header-title']}>{props.title}</h1>
                <span className={classes['header-subtitle']}>{props.subtitle}</span>
            </div>
            <button className={classes['header-button']}><img src={fileImg}></img>Create A Product</button>
        </div>
    )
};

export default MainHeader;