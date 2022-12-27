import Image from "next/image";
import { useState } from "react";
const Your_business = () => {
  const [play, setplay] = useState(false);
  return (
    <>
      <section className="bg-black lines_bg_img py-5 position-relative">
        <Image
          width={45}
          height={86}
          className="position-absolute top-0 d-none d-sm-inline-block end-0"
          src="/assets/images/svg/half_square.svg"
          alt="half_square"
        />
        <Image
          width={35}
          height={86}
          className="position-absolute end-0 d-none d-sm-inline-block bottom-0 mb-5 pb-5"
          src="/assets/images/svg/half_short_circle.svg"
          alt="half_short_circle"
        />
        <div className="container">
          <div className="row align-items-center justify-content-between text-white py-5 -5">
            <div className="col-md-6 py-xl-5 position-relative">
              <div className="col-6 col-sm-7 position-absolute z_index_1">
                {/* <img
                  className=" w-100"
                  src="./assets/images/png/girl_img.png"
                  alt="girl_img"
                /> */}
                <Image
                  width={302.44}
                  height={243.15}
                  className="w_xl_100 h-auto"
                  src="/assets/images/png/girl_img.png"
                  alt="girl_img"
                />
              </div>
              <div className="position-relative col-8 col-sm-10 z_index_2 business_img">
                {" "}
                <div
                  style={{ cursor: "pointer" }}
                  className="position-relative d-inline-block w_xl_100 h-auto"
                  width={415.14}
                  height={417.29}
                  onClick={() => {
                    setplay(!play);
                  }}
                >
                  <div className={`${play ? "opacity-0" : "opacity-1"}`}>
                    <Image
                      className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                      style={{ objectFit: "cover" }}
                      width={415.14}
                      height={417.29}
                      src="/assets/images/png/your_business_sec_img.png"
                      alt="your_business_sec_img"
                    ></Image>
                  </div>
                  <video
                    src="./assets/video.mp4"
                    // controls
                    className="w_xxl_100 h_video"
                    width={415.14}
                    height={417.29}
                    style={{ objectFit: "cover" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                  {/* <Image
                    width={415.14}
                    height={417.29}
                    className="w_xl_100 h-auto"
                    src="/assets/images/png/your_business_sec_img.png"
                    alt="your_business_sec_img"
                  /> */}
                  <a
                    href="#"
                    className={`${play ? "opacity-0" : "opacity-1"}`}
                    style={{ pointerEvents: "none" }}
                  >
                    <Image
                      width={93}
                      height={93}
                      className="position-absolute w_lg_25 h-auto z_index_3 top-50 start-50 translate-middle m-auto"
                      src="/assets/images/svg/play_btn.svg"
                      alt="play_btn"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5 py-xl-5 mt-5 mt-md-0 text-center text-md-start">
              <h2 className="ff_bebas_neue fw-normal fs_xl">
                WE’RE READY TO <span className="bg_body">GROW</span> YOUR
                BUSINESS
              </h2>
              <p className="ff_Montserrat fw-normal fs_sm mb-5">
                Dui sed vestibulum habitasse adipiscing lectus. Pulvinar
                malesuada at feugiat nunc. Lectus lectus sed turpis commodo
                dignissim.
              </p>
              <button className="text-white bt_hover bg_body about_btn border-0 ff_Montserrat fw-bold fs_sm">
                ABOUT US
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Your_business;
