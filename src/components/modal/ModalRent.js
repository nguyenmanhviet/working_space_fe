import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import classes from "./ModalRent.module.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ModalRent.module.css";
import { IoIosCalendar, IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowForwardCircle } from "react-icons/io5";

const ModalRent = (props) => {
  const iconArrow = "IoIosArrowRoundForward";
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const onActiveModalPayment = () => {
    props.onActiveModalPayment();
  }

  const exitRegister = (event) => {
    event.preventDefault();
    props.onExitModalRent();
  };

  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <header className={classes.modal__header}>
        <a href="#" onClick={exitRegister} className={classes.close} />
        <h3>Rent request</h3>
      </header>
      <div className={classes.container}>
        <div className={classes.containerLeft}>
          <div className={classes.top}>
            <h4>Booking details</h4>
            <div className={classes.bookDetails}>
              <div className={classes.datePickerWrapper}>
                <p>Check-in</p>
                <div className={classes.date_picker_wrapper}>
                  <DatePicker
                    selected={startDate}
                    placeholderText="Pick day..."
                    onChange={(date) => setStartDate(date)}
                    wrapperClassName={classes.datePicker}
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                  />
                  <span>
                    <IoIosCalendar className={classes.iconCarlendar} />
                  </span>
                </div>
              </div>
              <div className={classes.arrow}>
                <p>
                  <span>
                    <IoIosArrowRoundForward />
                  </span>
                </p>
              </div>
              <div className={classes.datePickerWrapper}>
                <p>Check-out</p>
                <div className={classes.date_picker_wrapper}>
                  <DatePicker
                    selected={endDate}
                    placeholderText="Pick day..."
                    onChange={(date) => setEndDate(date)}
                    wrapperClassName={classes.datePicker}
                    dateFormat="dd-MM-yyyy"
                    minDate={new Date()}
                  />
                  <span>
                    <IoIosCalendar className={classes.iconCarlendar} />
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.underInfo}>
              <p>
                Enter your <b>actual check-out date.</b>
              </p>
              <p>
                If you book for a shorter period you are not guaranteed to be
                able to renew!
              </p>
            </div>
            {/* <h4>Request amentities</h4>
            <div className={classes.amentity}>
                <p> <span><IoArrowForwardCircle /> </span>Desk 
                <input type="checkbox"></input></p>
               
            </div> */}
            <h4>{props.room.name}</h4>
            <div
              className={classes.imageRoom}
              style={{
                backgroundImage: `url('${props.room.image}')`,
              }}
            ></div>
          </div>
        </div>
        <div className={classes.containerRight}>
          <div className={classes.top}>
            <h4>Total</h4>
            <div className={classes.pricePerMonth}>
              <p>
                Price/Day: <span>150.000 ₫</span>
              </p>
              <p>
                Days rent: <span>X 1</span>
              </p>
            </div>
            <hr />
            <div className={classes.pricePerMonth}>
              <p>
                Total to confirm: <span>150.000 ₫</span>
              </p>
            </div>
          </div>
          <div className={classes.btnContainer}>
            <button className={classes.btnRent} onClick={onActiveModalPayment}>Payment</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalRent;
