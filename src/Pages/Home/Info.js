import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r to-primary from-secondary" img={clock} />
      <InfoCard cardTitle="Visit our location" bgClass="bg-neutral" img={marker} />
      <InfoCard cardTitle="Contact us now" bgClass="bg-gradient-to-r to-primary from-secondary" img={phone} />
    </div>
  );
};

export default Info;
