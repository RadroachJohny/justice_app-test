import { useState } from 'react';
import {NavLink, Redirect} from 'react-router-dom';

import classes from './styles.module.scss';
import logo from '../../assets/images/Logo.svg';
import logoutArrow from "../../assets/images/logout-arrow.svg";

const MainNavigation = () => {
    const [loggedIn, setSignedIn] = useState(true);

    const logOut = () => {
      localStorage.setItem('isLoggedIn', JSON.stringify(false));
        setSignedIn(false);

    };

    return (
        <>
        {!loggedIn && <Redirect to='/sign-in'/>}
        <div className={classes.main}>
            <div className="logo">
                <img className={classes.logo} src={logo} alt="Justice team logo"/>
                <ul className={classes['main-links']}>
                    <li className={classes['main-links__link']}>
                        <NavLink activeClassName={classes['active-link']} to='/main-page'>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
                                stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7 21V11H13V21" stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                            Main Page
                    </NavLink>
                    </li>
                    <li className={classes['main-links__link']}>
                        <NavLink activeClassName={classes['active-link']} to='/sales-statistics'>
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7L11 1Z"
                                stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11 1V7H17" stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M13 12H5" stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M13 16H5" stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M7 8H6H5" stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                        My products
                    </NavLink>
                    </li>
                    <li className={classes['main-links__link']}>
                        <NavLink activeClassName={classes['active-link']} to='/my-sales'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 2L2 16" stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path
                                    d="M3.5 6C4.88071 6 6 4.88071 6 3.5C6 2.11929 4.88071 1 3.5 1C2.11929 1 1 2.11929 1 3.5C1 4.88071 2.11929 6 3.5 6Z"
                                    stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M14.5 17C15.8807 17 17 15.8807 17 14.5C17 13.1193 15.8807 12 14.5 12C13.1193 12 12 13.1193 12 14.5C12 15.8807 13.1193 17 14.5 17Z"
                                    stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>My Sales</span>
                        </NavLink>
                    </li>
                    <li className={classes['main-links__link']}>
                        <NavLink activeClassName={classes['active-link']} to='personal-cabinet'>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                                    stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                                    stroke="#2B3844" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Personal Cabinet
                        </NavLink>
                    </li>
                </ul>
                <button onClick={logOut} className={classes.logout}>
                    <img src={logoutArrow} alt="log out"/>
                    Log Out
                </button>
            </div>
        </div>
            </>
    )
}

export default MainNavigation;