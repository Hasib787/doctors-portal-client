import React from "react";
import Chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import bgImage from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      class="hero min-h-screen"
      style={{
        background: ` url(${bgImage})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Chair}
          class="max-w-lg rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
          <h1 class="text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>{"Get Started"}</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;

