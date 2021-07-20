import classes from './styles.module.scss';

import banner from '../../assets/images/banner.jpg';

const SignIn = () => {
    return (
        <div className={classes.main}>
            <div className={classes['form-wrapper']}>
                <div className={classes['form-block']}>
                    <h3 className={classes['form-title']}>Sign in</h3>
                    <form className={classes.form}>
                        <div className={classes['input-block']}>
                            <label htmlFor="email">Email</label>
                            <input id='email' type="email" placeholder='Email'/>
                        </div>
                        <div className={classes['input-block']}>
                            <label htmlFor="pass">Password</label>
                            <input id='pass' type="password" placeholder='Enter Password'/>
                        </div>
                        <button className={classes['form-submit']} type='submit'>Log in</button>
                        <a className={classes['remind-pass']} href=''>Forgot password ?</a>
                    </form>
                </div>
            </div>
            <div className={classes.banner}><img src={banner} alt="Justice team banner"/></div>
        </div>
    )
};

export default SignIn;