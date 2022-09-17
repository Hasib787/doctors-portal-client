import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
const Contact = () => {
  return (
    <div
      style={{
        background: `url(${appointment})`,
      }}
      className="bg-primary px-10 py-14 mb-24"
    >
      <div className="text-center pb-10 text-white">
        <h3 className="text-primary text-xl font-bold">Contact Us</h3>
        <h2 className="text-3xl">Stay connected with us</h2>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="email"
          placeholder="Email Address"
          className="input w-full max-w-md"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input w-full max-w-md"
        />
        <textarea
          className="textarea w-full max-w-md"
          placeholder="Your message"
          rows={5}
        />
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </div>
  );
};

export default Contact;
