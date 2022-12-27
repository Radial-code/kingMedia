import Image from "next/image";
import KingNav from "./KingNav";
import Slider from "react-slick";
import { useState } from "react";
const Hero = () => {
  const [play, setplay] = useState(false);
  const [playONe, setplayONe] = useState(false);
  const [playTWo, setplayTWo] = useState(false);
  var settings = {
    dots: true,
    arrows: false,
    // fade: "fade",
    // infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <header className="min_vh_xl_100 d-flex flex-column overflow-hidden">
        <KingNav />
        <section className="position-relative flex-grow-1 d-flex align-items-center bg-black pt-5">
          <div className="position-fixed top-50 translate-middle-y start-0 z_index_3 social_icons">
            <div className="d-flex flex-column ms-md-2 ">
              <a
                className="d-flex flex-column align-items-center my-5 my-md-3 my-lg-5"
                href="#"
              >
                <p className="tc_vertical text-white ff_Montserrat fs_xsm fw_md mb-2">
                  TWITTER
                </p>
                {/* next page */}
                <Image
                  width={24}
                  height={24}
                  src="/assets/images/svg/twitter_icon.svg"
                  alt="twitter_icon"
                />
              </a>
              <a
                className="d-flex flex-column align-items-center my-5 my-md-3 my-lg-5"
                href="#"
              >
                <p className="tc_vertical text-white ff_Montserrat fs_xsm fw_md mb-2">
                  FACEBOOK
                </p>
                <Image
                  width={24}
                  height={24}
                  src="/assets/images/svg/facebook_icon.svg"
                  alt="facebook_icon"
                />
              </a>
              <a
                className="d-flex flex-column align-items-center my-5 my-md-3 my-lg-5"
                href="#"
              >
                <p className="tc_vertical text-white ff_Montserrat fs_xsm fw_md mb-2">
                  INSTAGRAM
                </p>
                <Image
                  width={24}
                  height={24}
                  src="/assets/images/svg/instagram_icon.svg"
                  alt="instagram_icon"
                />
              </a>
            </div>
          </div>
          <Image
            width={1033}
            height={735.7}
            className="header_girl_bg_img z_index_1 position-absolute end-0 h-auto"
            src="/assets/images/png/header_girl_bg_img.png"
            alt="header_girl_bg_img"
          />
          <div className="container">
            <div className="row justify-content-between z_index_2 position-relative pt-0 pt-md-4 mt-1 pb-4 pb--0 align-items-center flex-column-reverse flex-md-row">
              <div className="col-md-5 text-center mt-4 mt-md-0 text-md-start">
                <h2 className="ff_bebas_neue fw-normal fs_xxl text-white line_height">
                  WE ARE <span className="tc_body">KING MEDIA</span>
                </h2>
                <p className="ff_Montserrat fw-normal fs_sm text-white mb-4 pb-4 pb-md-0 mb-md-5">
                  Gem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus.
                </p>
                <button
                  className="text-white bt_hover bg_body py-3 btn_px border-0 ff_Montserrat fw-bold fs_sm"
                  href="#"
                >
                  GET STARTED
                </button>
              </div>
              <div className="col-md-6 col-lg-5 bg-black position-relative pb-4">
                {" "}
                <Slider className="position-relative slider" {...settings}>
                  <div
                    className="h-auto cursor_pointer w_xxl_100 position-relative"
                    width={527}
                    height={566.69}
                    onClick={() => {
                      setplay(!play);
                    }}
                  >
                    <div className={`${play ? "opacity-0" : "opacity-1"}`}>
                      <Image
                        className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                        style={{ objectFit: "cover" }}
                        width={527}
                        height={566.69}
                        src="/assets/images/png/header_girl_img.png"
                        alt="header_girl_img"
                      ></Image>
                    </div>
                    <video
                      src="./assets/video.mp4"
                      // controls
                      className="w_xxl_100 h_auto"
                      width={527}
                      height={566.69}
                      style={{ objectFit: "cover" }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                    <a
                      className={`${play ? "opacity-0" : "opacity-1"}`}
                      style={{ pointerEvents: "none" }}
                      href="#"
                    >
                      <Image
                        style={{ cursor: "pointer" }}
                        width={93}
                        height={93}
                        className="position-absolute w_lg_25 h-auto z_index_3 top-50 start-50 translate-middle m-auto"
                        src="/assets/images/svg/play_btn.svg"
                        alt="play_btn"
                      />
                    </a>
                  </div>
                  <div
                    className="h-auto cursor_pointer w_xxl_100 position-relative"
                    width={527}
                    height={566.69}
                    onClick={() => {
                      setplayONe(!playONe);
                    }}
                  >
                    <div className={`${playONe ? "opacity-0" : "opacity-1"}`}>
                      <Image
                        className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                        style={{ objectFit: "cover" }}
                        width={527}
                        height={566.69}
                        src="/assets/images/png/header_girl_img.png"
                        alt="header_girl_img"
                      ></Image>
                    </div>
                    <video
                      src="./assets/video.mp4"
                      // controls
                      className="w_xxl_100 h_auto"
                      width={527}
                      height={566.69}
                      style={{ objectFit: "cover" }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                    <a
                      className={`${playONe ? "opacity-0" : "opacity-1"}`}
                      style={{ pointerEvents: "none" }}
                      href="#"
                    >
                      <Image
                        style={{ cursor: "pointer" }}
                        width={93}
                        height={93}
                        className="position-absolute w_lg_25 h-auto z_index_3 top-50 start-50 translate-middle m-auto"
                        src="/assets/images/svg/play_btn.svg"
                        alt="play_btn"
                      />
                    </a>
                  </div>
                  <div
                    className="h-auto w_xxl_100 position-relative"
                    width={527}
                    height={566.69}
                    onClick={() => {
                      setplayTWo(!playTWo);
                    }}
                  >
                    {" "}
                    <div className={`${playTWo ? "opacity-0" : "opacity-1"}`}>
                      <Image
                        className="h-100 w-100 w_xxl _100 position-absolute bottom-0 start-0"
                        style={{ objectFit: "cover" }}
                        width={527}
                        height={566.69}
                        src="/assets/images/png/header_girl_img.png"
                        alt="header_girl_img"
                      ></Image>
                    </div>
                    <video
                      src="./assets/video.mp4"
                      // controls
                      className="w_xxl_100 h_auto"
                      width={527}
                      height={566.69}
                      style={{ objectFit: "cover" }}
                      autoPlay
                      loop
                      muted
                      playsInline
                    ></video>
                    <a
                      className={`${playTWo ? "opacity-0" : "opacity-1"}`}
                      style={{ pointerEvents: "none" }}
                      href="#"
                    >
                      <Image
                        style={{ cursor: "pointer" }}
                        width={93}
                        height={93}
                        className="position-absolute w_lg_25 h-auto z_index_3 top-50 start-50 translate-middle m-auto"
                        src="/assets/images/svg/play_btn.svg"
                        alt="play_btn"
                      />
                    </a>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
