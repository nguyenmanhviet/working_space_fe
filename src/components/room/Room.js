import classes from "./Room.module.css";

import { IoIosBookmark} from "react-icons/io";


import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";


const Room = (props) => {

  const onActiveModal = () => {
    props.onActiveModalRoom(props.room);
  }

  return (
    <div className={classes.property}>
      <div
        className={classes.propertyImage}
        style={{
          width: "300px",
          height: "200px",
          backgroundImage: `url(${props.room.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px 0px 0px 10px",
        }}
      >
        {/* <button className={classes.propertyStatus}>Available from now</button> */}
      </div>
      <div className={classes.propertyContent}>
        <h2>{props.room.name}</h2>
        <p><IoIosBookmark className={classes.icon}/> {props.room.size} m<sup>2</sup> Interior Surface</p>
        <p><BsPerson className={classes.icon}/> {props.room.capacity} people</p>
        <p className={classes.price}><RiMoneyDollarCircleFill className={classes.icon}/> ₫{props.room.priceId} VNĐ/day</p>
        <div>
          <button onClick={onActiveModal}>Detail</button>
        </div>
      </div>
{/*       
      <div className={classes.button}>
        <button className={classes.rentNow}>Rent now</button>
      </div> */}
    </div>
  );
};

export default Room;