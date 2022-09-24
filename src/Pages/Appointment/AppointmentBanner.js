import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({date, setDate}) => {
  
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-md rounded-lg shadow-2xl"
          alt="doctors chair"
        />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
