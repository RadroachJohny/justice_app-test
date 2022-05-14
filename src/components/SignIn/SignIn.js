import React, {useState, useEffect, useRef} from 'react';
import {Redirect, Link} from 'react-router-dom';

import banner from '../../assets/images/banner.jpg';
import classes from './styles.module.scss';

const SignIn = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const [redirectToMain, setRedirectToMain] = useState(false);
	const [userNotFound, setUserNotFound] = useState(false);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('isLoggedIn'))) {
			setRedirectToMain(true);
		} else {
			setRedirectToMain(false);
		}
	}, [setRedirectToMain]);

	const checkInputUserData = (e) => {
		e.preventDefault();
		const allUsersArr = JSON.parse(localStorage.getItem('users'));
		const existingUser = allUsersArr.find((elem) => elem.email === emailRef.current.value && elem.passwordValue === passwordRef.current.value);

		if (existingUser) {
			localStorage.setItem('isLoggedIn', JSON.stringify(true));
			localStorage.setItem('currentUser', JSON.stringify({
				...existingUser,
				productCat: existingUser.productCat || 'NA',
				address: existingUser.address || 'NA'
			}));
			setRedirectToMain(true);
			setUserNotFound(false);
		} else {
			setUserNotFound(true);
		}
	};

  const removeIsCreatedUser = () => {
    localStorage.removeItem('isCreated');
  };

	const userNotFoundClass = userNotFound ? `${classes.error}` : '';

	return (
		<>
			{redirectToMain && <Redirect to={'/main-page'}/>}

			<div className={classes.main}>

				<div className={classes['form-wrapper']}>
					<div className={classes['form-block']}>
						<p className={classes['form-title']}>Sign in</p>
						<form className={classes.form}>
							<div className={classes['input-block']}>
								<label htmlFor="email">Email</label>
								<input ref={emailRef} id='email' type="email" placeholder='Email'/>
							</div>
							<div className={classes['input-block']}>
								<label htmlFor="pass">Password</label>
								<input ref={passwordRef} id='pass' type="password" placeholder='Enter Password'/>
							</div>
							<button 
              onClick={checkInputUserData}											
              className={`${classes['form-submit']} ${userNotFoundClass}`}											
              type='submit'>Log in
							</button>
							<Link onClick={removeIsCreatedUser} className={classes['remind-pass']} to='/create-account'>Forgot password ?</Link>
						</form>
					</div>
				</div>
				<div className={classes.banner}><img src={banner} alt="Justice team banner"/></div>
			</div>
		</>
	)
};

export default SignIn;