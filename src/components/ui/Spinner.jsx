import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../../../public/loader.json";

export const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] w-full">
      <div className="w-24 h-24 md:w-32 md:h-32">
        <Lottie 
          animationData={loaderAnimation} 
          loop={true} 
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
