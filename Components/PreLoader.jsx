import React from "react";

const PreLoader = () => {
  return (
    <>
      <div className="loading bg-black d-flex justify-content-center align-items-center">
        <div>
          <img className="loading_svg" src="assets/images/svg/Group 8.svg" />
        </div>
      </div>
    </>
  );
};

export default PreLoader;
