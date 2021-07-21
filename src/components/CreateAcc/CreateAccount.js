import classes from './styles.module.scss';

import banner from '../../assets/images/banner.jpg';

const CreateAccount = () => {
    return (
        <div className={classes.main}>
            <div className={classes['form-wrapper']}>
                <div className={classes['form-block']}>
                    <p className={classes['form-title']}>Create an account</p>
                    <form className={classes.form}>
                        <div className={classes['username-block']}>
                        <div className={classes['input-block']}>
                            <label htmlFor="firstName">First name</label>
                            <input id='firstName' type="email" placeholder='First name'/>
                        </div>
                        <div className={classes['input-block']}>
                            <label htmlFor="lastName">Last name</label>
                            <input id='lastName' type="password" placeholder='Last name'/>
                        </div>
                        </div>
                        <div className={classes['input-block']}>
                            <label htmlFor="companyName">Company name</label>
                            <input id='companyName' type="password" placeholder='Company name'/>
                        </div>
                        <div className={classes['input-block']}>
                            <label htmlFor="email">Email</label>
                            <input id='email' type="password" placeholder='Email'/>
                        </div>
                        <div className={classes['input-block']}>
                            <label htmlFor="email">Password</label>
                            <input id='email' type="password" placeholder='Email'/>
                        </div>
                        <div className={classes['input-block']}>
                            <label htmlFor="email">Repeat password</label>
                            <input id='email' type="password" placeholder='Repeat password'/>
                        </div>
                        <button className={classes['form-submit']} type='submit'>Create account</button>
                        <div className={classes['login-block']}>
                            <p>Already have an account?</p>
                            <a className={classes.login} href='www.random.com'>Log in</a>
                        </div>

                    </form>
                </div>
            </div>
            <div className={classes.banner}><img src={banner} alt="Justice team banner"/></div>
        </div>
    )
};

export default CreateAccount;