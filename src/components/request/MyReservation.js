import { IoIosPerson, IoMdPhonePortrait } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import {
  BsCheckCircle,
  BsPaypal,
  BsFillArchiveFill,
  BsFillCalendar2CheckFill,
  BsFillCalendarXFill,
} from "react-icons/bs";
import classes from "./MyReservation.module.css";
import { IoAlarmSharp } from "react-icons/io5";

const MyReservation = (props) => {
  return (
    <div class={classes.container}>
      <h2 className={classes.headerr}>
        <span><BsFillArchiveFill/></span>
        MY RESERVATIONS
      </h2>
      <ul class={classes.responsiveTable}>
        <li class={classes.tableHeader}>
          <div class={classes.col1}>Room</div>
          <div class={classes.col2}>Landlord Information</div>
          <div class={classes.col3}>Check-in</div>
          <div class={classes.col4}>Check-out</div>
          <div class={classes.col5}>Status</div>
        </li>
        <NavLink className={classes.linkReservation}  to={{
                pathname: `/reservation/1`,
            }}>
        <li class={classes.tableRow}>
          <div class={classes.col1} data-label="Job Id">
            <div
              style={{
                width: "100%",
                height: "80px",
                backgroundImage: `url("https://cdn.roomlessrent.com/listing/8d/22/7d/33/8d227d33-c53e-4f7f-9a4c-6ec343be83c0.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div class={classes.col2} data-label="Customer Name">
            <div className={classes.infoCus}>
              <p>
                <span>
                  {" "}
                  <IoIosPerson />
                </span>{" "}
                Thai Tang Luc
              </p>
            </div>
            <div className={classes.infoCus}>
              <p>
                <span>
                  {" "}
                  <IoMdPhonePortrait />{" "}
                </span>{" "}
                0772974870
              </p>
            </div>
            <div className={classes.infoCus}>
              <p>
                <span>
                  {" "}
                  <HiOutlineMail />{" "}
                </span>{" "}
                thidaihoc29012000@gmail.com
              </p>
            </div>
          </div>
          <div class={classes.col3} data-label="Check-in">
            <div className={classes.checkDate}>
              <div>
                <BsFillCalendar2CheckFill />
              </div>
              22 May 2022
            </div>
          </div>
          <div class={classes.col4} data-label="Checkout">
            <div className={classes.checkDate}>
              <div>
                <BsFillCalendarXFill />
              </div>
              23 May 2022
            </div>
          </div>
          <div class={classes.col5} data-label="Payment Status">
            <div className={classes.status}>
              <div className={classes.icon}>
                <IoAlarmSharp />
              </div>
              <div className={classes.text}>
                <div className={classes.notify}>
                  The request must be confirmed.
                </div>
                <div className={classes.note}>
                  The request must be confirmed by the owner of the room.
                </div>
              </div>
            </div>
          </div>
        </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default MyReservation;
