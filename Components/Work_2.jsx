import { useState } from "react";
import Image from "next/image";
const Work_2 = () => {
  const [play, setplay] = useState(false);
  const [play2, setplay2] = useState(false);
  const [play3, setplay3] = useState(false);
  const [play4, setplay4] = useState(false);
  const [play5, setplay5] = useState(false);
  const [play6, setplay6] = useState(false);

  return (
    <>
      <div className=" container py-5">
        <div className="row text-center text-md-start justify-content-between pt-md-5 pb-4">
          <div className="col-md-4">
            <h2 className=" ff_bebas_neue fw-normal fs_xl text-white">
              WORK SHOWCASE
            </h2>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <p className=" ff_Montserrat fw-normal fs_xsm text-white">
              Et libero quis vitae massa lacus. Turpis magna semper sed ut purus
              gravida pharetra feugiat. Ut sem nec viverra nibh. Ante imperdiet
              donec.
            </p>
            <span className="d-flex align-items-center justify-content-center justify-content-md-start transition_200ms right_arrow right_arrow_parent">
              <a
                className="ff_bebas_neue fw-normal fs_md tc_body a_hover"
                href="#"
              >
                PORTFOLIOS{" "}
              </a>
              <a className="ms-2 d-flex align-items-center" href="#">
                <img
                  width={20}
                  height={10}
                  className="transition_200ms"
                  src="/assets/images/svg/right_arrow_icon.svg"
                  alt="right_arrow_icon"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="g_items_1">
              <div
                className="position-relative z_index_1"
                style={{ cursor: "pointer" }}
                onClick={() => setplay(!play)}
              >
                <div className={`${play ? "opacity-0" : "opacity-1"}`}>
                  <Image
                    className="h-100 w-100 grid_videoOne position-absolute bottom-0 start-0"
                    style={{ objectFit: "cover" }}
                    width={415.14}
                    height={417.29}
                    src="/assets/images/png/g_items_1.png"
                    alt="img_grid"
                  ></Image>
                </div>
                <video
                  src="./assets/video.mp4"
                  // controls
                  className="w_xl_100 grid_videoOne h_video"
                  width={416}
                  height={546}
                  style={{ objectFit: "cover" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>

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
              <p className=" ff_bebas_neue fw-normal fs_lg text-white pt-2">
                short form
              </p>
            </div>
            <div className="g_items_4">
              <div
                className="position-relative z_index_1"
                style={{ cursor: "pointer" }}
                onClick={() => setplay2(!play2)}
              >
                <div className={`${play2 ? "opacity-0" : "opacity-1"}`}>
                  <Image
                    className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                    style={{ objectFit: "cover" }}
                    width={415.14}
                    height={417.29}
                    src="/assets/images/png/g_items_4.png"
                    alt="img_grid"
                  ></Image>
                </div>
                <video
                  src="./assets/video.mp4"
                  // controls
                  className="w_xl_100 grid_videoTwo h_video"
                  width={416}
                  height={416}
                  style={{ objectFit: "cover" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>

                <a
                  href="#"
                  className={`${play2 ? "opacity-0" : "opacity-1"}`}
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
              <p className=" ff_bebas_neue fw-normal fs_lg text-white pt-2">
                web development
              </p>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="g_items_2">
              <div
                className="position-relative z_index_1"
                style={{ cursor: "pointer" }}
                onClick={() => setplay5(!play5)}
              >
                <div className={`${play5 ? "opacity-0" : "opacity-1"}`}>
                  <Image
                    className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                    style={{ objectFit: "cover" }}
                    width={415.14}
                    height={417.29}
                    src="/assets/images/png/g_items_2.png"
                    alt="img_grid"
                  ></Image>
                </div>
                <video
                  src="./assets/video.mp4"
                  // controls
                  className="w_xl_100 grid_videoTwo h_video"
                  width={416}
                  height={416}
                  style={{ objectFit: "cover" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>

                <a
                  href="#"
                  className={`${play5 ? "opacity-0" : "opacity-1"}`}
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
              <p className=" ff_bebas_neue fw-normal fs_lg text-white pt-2">
                vertical and horizontal video creation
              </p>
            </div>
            <div className="g_items_5">
              <div
                className="position-relative z_index_1"
                style={{ cursor: "pointer" }}
                onClick={() => setplay3(!play3)}
              >
                <div className={`${play3 ? "opacity-0" : "opacity-1"}`}>
                  <Image
                    className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                    style={{ objectFit: "cover" }}
                    width={415.14}
                    height={417.29}
                    src="/assets/images/png/g_items_5.png"
                    alt="img_grid"
                  ></Image>
                </div>
                <video
                  src="./assets/video.mp4"
                  // controls
                  className="w_xl_100 grid_videoOne h_video"
                  width={416}
                  height={546}
                  style={{ objectFit: "cover" }}
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>

                <a
                  href="#"
                  className={`${play3 ? "opacity-0" : "opacity-1"}`}
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
              <p className=" ff_bebas_neue fw-normal fs_lg text-white pt-2">
                VERTICAL VIDEO MARKETING
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="row">
              <div className="col-6 col-md-12">
                <div
                  className="position-relative z_index_1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setplay4(!play4)}
                >
                  <div className={`${play4 ? "opacity-0" : "opacity-1"}`}>
                    <Image
                      className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                      style={{ objectFit: "cover" }}
                      width={415.14}
                      height={417.29}
                      src="/assets/images/png/g_items_3.png"
                      alt="img_grid"
                    ></Image>
                  </div>
                  <video
                    src="./assets/video.mp4"
                    // controls
                    className="w_xl_100 grid_videoOne h_video"
                    width={416}
                    height={546}
                    style={{ objectFit: "cover" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>

                  <a
                    href="#"
                    className={`${play4 ? "opacity-0" : "opacity-1"}`}
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
                <p className=" ff_bebas_neue fw-normal fs_lg text-white pt-2">
                  SEARCH MARKETING
                </p>
              </div>
              <div className="col-6 col-md-12">
                <div
                  className="position-relative z_index_1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setplay6(!play6)}
                >
                  <div className={`${play6 ? "opacity-0" : "opacity-1"}`}>
                    <Image
                      className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                      style={{ objectFit: "cover" }}
                      width={415.14}
                      height={417.29}
                      src="/assets/images/png/g_items_6.png"
                      alt="img_grid"
                    ></Image>
                  </div>
                  <video
                    src="./assets/video.mp4"
                    // controls
                    className="w_xl_100 grid_videoTwo h_video"
                    width={416}
                    height={416}
                    style={{ objectFit: "cover" }}
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>

                  <a
                    href="#"
                    className={`${play6 ? "opacity-0" : "opacity-1"}`}
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
                <p className=" ff_bebas_neue fw-normal fs_lg text-white pt-2">
                  SEARCH ENGINE OPTIMIZATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work_2;
