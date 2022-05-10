import ReactDOM from "react-dom";
import classes from "./ModalPayment.module.css";
import { PayPalScriptProvider, PayPalButtons} from "@paypal/react-paypal-js";
import { useState, useRef, useContext } from "react";
import AuthContext from "../../store/authContext";

const ModalPayment = (props) => {
    const authCtx = useContext(AuthContext);
  const exitRegister = (event) => {
    event.preventDefault();
    props.onExitModalPayment();
  };
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <header className={classes.modal__header}>
        <a href="#" onClick={exitRegister} className={classes.close} />
        <h3>Payment information</h3>
      </header>
      <div className={classes.container}>
        <div className={classes.inner_container}>
          <div className={classes.control}>
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              value={"Nguyen Manh Viet"}
              disabled={true}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={"thidaihoc29012000@gmail.com"}
              disabled={true}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Your Phone:</label>
            <input
              type="text"
              id="phone"
              value={"0772978470"}
              disabled={true}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phone">Method payment:</label>
            <PayPalScriptProvider options={{ "client-id": "test"}} >
            <PayPalButtons/>
            
          </PayPalScriptProvider>
          </div>
          {/* <PayPalScriptProvider options={{ "client-id": "test"}} >
            <PayPalButtons/>
            
          </PayPalScriptProvider> */}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalPayment;
