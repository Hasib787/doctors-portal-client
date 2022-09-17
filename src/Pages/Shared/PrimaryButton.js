import React from "react";

const PrimaryButton = ({children}) => {
  return (
    <div>
      <button className="btn btn-primary font-bold bg-gradient-to-r to-primary from-secondary text-white bold ">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
