import MainHeader from './MainHeader/MainHeader';
import PersonalCabinet from '../PersonalCabinet/PersonalCabinet';

import classes from './style.module.scss';

const title = 'Sales statistics';
const subtitle = 'Welcome to CRM dashboard';

const MainContent = () => {
    return (
        <div className={classes.mainWrapper}>
            <MainHeader title={title} subtitle={subtitle}/>
            <PersonalCabinet/>

        </div>

    )
}

export default MainContent;