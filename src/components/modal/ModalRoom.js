import classes from "./ModalRoom.module.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoDocumentTextOutline, IoLogoRss } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import {
  IoIosBookmark,
  IoIosDesktop,
  IoIosBed,
  IoIosCalendar,
} from "react-icons/io";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import "react-tabs/style/react-tabs.css";

const ModalRoom = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  const exitRegister = (event) => {
    event.preventDefault();
    props.onExitModalRoom();
  };
 
  const onActiveModalRent = () => {
    props.onActiveModalRent();
  }
  return ReactDOM.createPortal(
    <div className={classes.modal}>
      <header className={classes.modal__header}>
        <a href="#" onClick={exitRegister} className={classes.close} />
        <h3>{props.room.name}</h3>
      </header>
      <div className={classes.container}>
        <div
          className={classes.imageRoom}
          style={{
            backgroundImage: `url('${props.room.image}')`,
          }}
        ></div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab style={{ color: "#1e8489" }}>
              <IoDocumentTextOutline /> Details
            </Tab>
            <Tab style={{ color: "#1e8489" }}>
              <IoLogoRss /> Utilities
            </Tab>
          </TabList>

          <TabPanel>
            <div className={classes.roomDescription}>
              <p>
                <BsPerson /> Up to {props.room.capacity} people
              </p>
              <p>
                <IoIosBookmark /> {props.room.size} m<sup>2</sup> Interior
                Surface
              </p>
              <p>
                <IoDocumentTextOutline /> {props.room.description}
              </p>
              <p>
                <RiMoneyDollarCircleFill /> ₫{props.room.price} VNĐ/day
              </p>
              <p>
                <IoIosCalendar /> Available{" "}
              </p>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={classes.roomUtility}>
              <div className={classes.utility}>
                <p>
                  <span>
                    <IoIosDesktop />
                  </span>{" "}
                  Desk{" "}
                </p>
              </div>
              <div className={classes.utility}>
                <p>
                  <span>
                    <IoIosDesktop />
                  </span>{" "}
                  Desk{" "}
                </p>
              </div>
              <div className={classes.utility}>
                <p>
                  <span>
                    <IoIosDesktop />
                  </span>{" "}
                  Desk{" "}
                </p>
              </div>
              <div className={classes.utility}>
                <p>
                  <span>
                    <IoIosDesktop />
                  </span>{" "}
                  Desk{" "}
                </p>
              </div>
              <div className={classes.utility}>
                <p>
                  <span>
                    <IoIosDesktop />
                  </span>{" "}
                  Desk{" "}
                </p>
              </div>
              <div className={classes.utility}>
                <p>
                  <span>
                    <IoIosDesktop />
                  </span>{" "}
                  Desk{" "}
                </p>
              </div>
            </div>
          </TabPanel>
        </Tabs>
        <div className={classes.btnContainer}>
          <button className={classes.btnRent} onClick={onActiveModalRent}>Rent now</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default ModalRoom;
