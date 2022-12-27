import React from "react";
import Image from "next/image";
import { useState } from "react";
const Seo_checklist = () => {
  const [play, setplay] = useState(false);
  return (
    <>
      <section className="bg-black py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between text-white py-5 -5">
            <div className="col-md-5 py-xl-5 mt-5 mt-md-0 text-center text-md-start ps-md-5 pe-md-3">
              <h2 className="ff_bebas_neue fw-normal fs_xl">
                SEO
                <span className="bg_body">CHECKLIST</span>
              </h2>
              <p className="ff_Montserrat fw-normal fs_sm mb-5">
                At ut dolor elit tellus. Sem at aliquet dui diam lectus. Eget
                nisl duis nec augue tristique. Dui enim accumsan eget turpis
                dictumst neque cras. A tellus dignissim ut sem.
              </p>
              <ul className="ps-0">
                <li className="ff_Montserrat fw-bold fs_sm d-flex align-items-center">
                  <Image
                    width={20}
                    height={20}
                    className="me-3"
                    src="/assets/images/svg/right_icon.svg"
                    alt="right_icon"
                  />
                  Redirects
                </li>
                <li className="ff_Montserrat fw-bold fs_sm d-flex align-items-center mt-3">
                  <Image
                    width={20}
                    height={20}
                    className="me-3"
                    src="/assets/images/svg/right_icon.svg"
                    alt="right_icon"
                  />
                  Keywords
                </li>
                <li className="ff_Montserrat fw-bold fs_sm d-flex align-items-center mt-3">
                  <Image
                    width={20}
                    height={20}
                    className="me-3"
                    src="/assets/images/svg/right_icon.svg"
                    alt="right_icon"
                  />
                  Images
                </li>
                <li className="ff_Montserrat fw-bold fs_sm d-flex align-items-center mt-3">
                  <Image
                    width={20}
                    height={20}
                    className="me-3"
                    src="/assets/images/svg/right_icon.svg"
                    alt="right_icon"
                  />
                  Internal links
                </li>
                <li className="ff_Montserrat fw-bold fs_sm d-flex align-items-center mt-3">
                  <Image
                    width={20}
                    height={20}
                    className="me-3"
                    src="/assets/images/svg/right_icon.svg"
                    alt="right_icon"
                  />
                  Title & meta tags
                </li>
              </ul>
            </div>{" "}
            <div className="col-md-6 py-xl-5 position-relative">
              <div className="col-6 col-sm-7 position-absolute z_index_1">
                <Image
                  width={302.44}
                  height={243.15}
                  className="w_xl_100 h-auto"
                  src="/assets/images/png/tea_with_papers.png"
                  alt="tea_with_papers"
                />
              </div>
              <div className="position-relative col-8 col-sm-10 z_index_2 business_img">
                {/* {" "}
                <Image
                  width={415.14}
                  height={417.29}
                  className="w_xl_100 h-auto"
                  src="/assets/images/png/girl_boy_with_laptop.png"
                  alt="girl_boy_with_laptop"
                /> */}
                <div
                  style={{ cursor: "pointer" }}
                  className="position-relative d-inline-block w_xl_100 h-auto"
                  width={415.14}
                  height={417.29}
                  onClick={() => {
                    setplay(!play);
                  }}
                >
                  {" "}
                  <div className={`${play ? "opacity-0" : "opacity-1"}`}>
                    <Image
                      className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                      style={{ objectFit: "cover" }}
                      width={415.14}
                      height={417.29}
                      src="/assets/images/png/girl_boy_with_laptop.png"
                      alt="girl_boy_with_laptop"
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Seo_checklist;
