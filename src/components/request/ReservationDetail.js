import {
  IoIosArrowRoundDown,
  IoIosArrowRoundBack,
  IoIosPerson,
  IoMdPhonePortrait,
} from "react-icons/io";
import {
  BsCheckCircle,
  BsPaypal,
  BsFillCalendar2CheckFill,
  BsFillCalendarXFill,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoAlarmSharp } from "react-icons/io5";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import classes from "./ReservationDetail.module.css";

const ReservationDetail = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.goBack}>
          <button>
            <span>
              <IoIosArrowRoundBack />
            </span>
            ALL RESERVATIONS
          </button>
        </div>
        <div className={classes.status}>Pending</div>
      </div>
      <div className={classes.content}>
        <div className={classes.space}>
          <div className={classes.room}>
            <p className={classes.header}>Room</p>
            <div
              style={{
                width: "100%",
                height: "150px",
                backgroundImage: `url("https://cdn.roomlessrent.com/listing/8d/22/7d/33/8d227d33-c53e-4f7f-9a4c-6ec343be83c0.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
              }}
            ></div>
            <label className={classes.name}>Phong cao cap </label>
          </div>
          <div className={classes.linked}>
            <span>
              <IoIosArrowRoundDown />
            </span>
          </div>
          <div className={classes.room}>
            <p className={classes.header}>Property</p>
            <div
              style={{
                width: "100%",
                height: "150px",
                backgroundImage: `url("https://cdn.roomlessrent.com/listing/8d/22/7d/33/8d227d33-c53e-4f7f-9a4c-6ec343be83c0.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "10px",
              }}
            ></div>
            <p>Apartment</p>
            <label className={classes.name}>VIA TORIO LOFT</label>
            <p className={classes.address}>
              Via Torino, Milan, Città Metropolitana Di Milano
            </p>
          </div>
        </div>
        <div className={classes.information}>
          <div className={classes.wrapper}>
            <div className={classes.inforReservation}>
              <span>Reservation Information</span>
              <div className={classes.rentInfo}>
                <p>
                  <span>
                    <BsCheckCircle />
                  </span>{" "}
                  Daily rent booked: <span>10</span>
                </p>
              </div>
              <div className={classes.rentInfo}>
                <p>
                  <span>
                    <BsPaypal />
                  </span>{" "}
                  Amount: <span>125.12 VNĐ</span>
                </p>
              </div>
              <div className={classes.rentInfo}>
                <p>
                  <span>
                    <BsFillCalendar2CheckFill />
                  </span>{" "}
                  Check-in: <span>12 May 2022</span>{" "}
                </p>
              </div>
              <div className={classes.rentInfo}>
                <p>
                  <span>
                    <BsFillCalendarXFill />
                  </span>{" "}
                  Check-out: <span>23 May 2022</span>
                </p>
              </div>
              <span>Status Processing</span>
              <div className={classes.status1}>
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

            {/*             
            <div className={classes.inforReservation}>
              
            </div> */}
            <div className={classes.paypal}>
              <label>Method payment:</label>
              <PayPalScriptProvider options={{ "client-id": "test"}}>
                <PayPalButtons
                  disabled={true}
                  style={{ layout: "horizontal", color: "black", tagline: false,}}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            currency_code: "USD",
                            // value: "" + props.reservation.total,
                            value: "12.12",
                            showSpinner: true,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      // const name = details.payer.name.given_name;
                      // alert(`Transaction completed by ${name}`);
                    });
                  }}
                />
              </PayPalScriptProvider>
              <p>- You need the approvement of the owner to deposit the total rent.</p>
              <p>- If you don't want to rent it anymore, just cancel the request reservation.</p>
            </div>
            <div className={classes.btnContainer}>
            <button className={classes.btnRent}>XCancel request</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetail;
