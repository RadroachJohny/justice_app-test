import classes from './styles.module.scss'; 

const PersonalCabinet = () => {

const userInfo = JSON.parse(localStorage.getItem('currentUser'));

const {firstName, lastName, companyName} = userInfo;

console.log(userInfo)

    return (
        <form className={classes['cabinet-form']}>
            <div className={classes['input-block']}>
                <label htmlFor="firstname">First name</label>
                <input id='firstname' type="text" placeholder='First name' defaultValue={firstName}/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="lastname">Last name</label>
                <input id='lastname' type="text" placeholder='Last name' defaultValue={lastName}/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="companyName">Company name</label>
                <input id='companyName' type="text" placeholder='Company name'/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="productCategory">Product category</label>
                <input id='productCategory' type="text" placeholder='Product Category'/>
            </div>
            <div className={`${classes['input-block']} ${classes['wide']}`}>
                <label htmlFor="address">Address</label>
                <input id='address' type="text" placeholder='Address'/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="oldPass">Enter old password</label>
                <input id='oldPass' type="text" placeholder='Enter old password'/>
            </div>
            <div className={classes['input-block']}>
                <label htmlFor="newPass">Enter a new password</label>
                <input id='newPass' type="text" placeholder='Enter a new password'/>
            </div>
            <button className={classes['cabinet-form__submit']} type='submit'>Save changes</button>
        </form>
    )
 };

export default PersonalCabinet;