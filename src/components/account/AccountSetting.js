import {useState} from 'react';
import classes from './AccountSetting.module.css';

const AccountSetting = (props) => {
    const [index, setIndex] = useState(1);
 
    return (
        <div className={classes.container}>
            <div className={classes.nav}>
                <div className={index !== 1 ? classes.nav_item : classes.active}>
                   <p onClick={() => setIndex(1)}> Personal Information </p>
                </div>
                <div className={index !== 2 ? classes.nav_item : classes.active}>
                   <p onClick={() => setIndex(2)}> Billing Information </p> 
                </div>
                <div className={index !== 3 ? classes.nav_item : classes.active}>
                   <p onClick={() => setIndex(3)}> Access and Security </p>
                </div>
                <div className={index !== 4 ? classes.nav_item : classes.active}>
                   <p onClick={() => setIndex(4)}> Transactions </p>
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.personInfo}>
                    <h3>Personal Information</h3>
                    <div className={classes.control}>
                        <label for="name">Full name</label>
                        <input type="text" value="Nguyen Manh Viet"/>
                    </div>
                    <div className={classes.control}>
                        <label for="username">Username</label>
                        <input type="text" value="thaitangluc"/>
                    </div>
                    <div className={classes.control}>
                        <label for="email">Email address</label>
                        <input type="text" value="thidaihoc29012000@gmail.com"/>
                    </div>
                    <div className={classes.control}>
                        <label for="phone">Phone number</label>
                        <input type="text" value="0772978470"/>
                    </div>
                    <div className={classes.control}>
                        <label for="name">Identification</label>
                        <input type="text" value="201819506"/>
                    </div>
                    <div className={classes.control}>
                        <label for="name">Birthday</label>
                        <input type="text" value="Nguyen Manh Viet"/>
                    </div>
                    <div className={classes.control}>
                        <label for="name">Nation</label>
                        <input type="text" value="Nguyen Manh Viet"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default AccountSetting;