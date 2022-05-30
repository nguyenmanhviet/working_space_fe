import { NavLink } from "react-router-dom";
import classes from "./RequestRent.module.css";
import {
  BsFillArchiveFill,
  BsDoorOpen,
  BsJoystick,
  BsPaypal,
} from "react-icons/bs";

const RequestRent = (props) => {
  const reservations = [
    {
      id: 1,
      image:
        "https://cdn.roomlessrent.com/listing/af/e9/d0/92/afe9d092-b0bd-4afc-9d77-95f4b095f684.jpg",
      createAt: "24 May 2022",
      status: "Pending",
      name: "VIA TORIO LOFT",
      address: "Via Torino, Milan, Città Metropolitana Di Milano",
      total: 12.12,
      checkin: "24 May 2022",
      checkout: "24 May 2022",
      quantityDates: 10,
    },
    {
      id: 2,
      image:
        "https://cdn.roomlessrent.com/listing/af/e9/d0/92/afe9d092-b0bd-4afc-9d77-95f4b095f684.jpg",
      createAt: "24 May 2022",
      status: "Pending",
      name: "VIA TORIO LOFT",
      address: "Via Torino, Milan, Città Metropolitana Di Milano",
      total: 12.12,
      checkin: "24 May 2022",
      checkout: "24 May 2022",
      quantityDates: 10,
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <p>
          <span>
            <BsFillArchiveFill />
          </span>
          RENT REQUESTS
        </p>
      </div>
      <div className={classes.requests}>
        <div className={classes.filter}>
          <div className={classes.status}>
            <label>Status:</label>
            <select>
              <option value="ALL" selected>
                ALL
              </option>
              <option value="CANCELLED">CANCELLED</option>
              <option value="PENDING">PENDING</option>
              <option value="PAYING">PAYING</option>
              <option value="APPROVED">APPROVED</option>
            </select>
          </div>
          <div className={classes.status}>
            <label>Sort by:</label>
            <select placeholder="select">
              <option value="" selected>
                None
              </option>
              <option value="Creation">Creation at</option>
              <option value="Lastupdate">Last update date</option>
              <option value="Checkin">Check-in date</option>
              <option value="Checkout">Check-out date</option>
            </select>
          </div>
          <div className={classes.btnContainer}>
            <button className={classes.btnRent}>Filter</button>
          </div>
        </div>
        <div className={classes.containerRequests}>
          {reservations.map((reservation) => (
            <NavLink className={classes.linkReservation}  to={{
                pathname: `/request/1/reservation`,
            }} key={reservation.id}>
            <div className={classes.reservation}>
              <div className={classes.div1}>
                <div className={classes.label}>
                  <label>{reservation.createAt}</label>
                </div>
                <div
                  className={classes.image}
                  style={{
                    width: "100%",
                    height: "100px",
                    backgroundImage: `url(${reservation.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className={classes.div2}>
                <div className={classes.status}>{reservation.status}</div>
                <div className={classes.inforreser}>
                  <span>
                    <BsDoorOpen />
                  </span>{" "}
                  {reservation.name}
                </div>
                <div className={classes.inforreser}>
                  <span>
                    <BsJoystick />
                  </span>{" "}
                  {reservation.address}
                </div>
                <div className={classes.inforreser}>
                  <span>
                    <BsPaypal />
                  </span>{" "}
                  {reservation.total} VNĐ
                </div>
              </div>
              <div className={classes.div3}>
                <div className={classes.checkin}>
                  <p>
                    Check-in
                    <br></br>
                    <span>{reservation.checkin}</span>
                  </p>
                </div>
                <div className={classes.checkin}>
                  <p>
                    Check-out
                    <br></br>
                    <span>{reservation.checkout}</span>
                    <br></br>
                    ( <span>{reservation.quantityDates}</span> days )
                  </p>
                </div>
              </div>
            </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RequestRent;
