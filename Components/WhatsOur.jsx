import { useRef } from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

const WhatOur = () => {
  const slider = useRef(null);
  var settin = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: "fade",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <section>
        <div className="container py-5 overflow-hidden">
          <p className="text-center text-lg-start text-white ff_bebas_neue fs_xl fw-normal">
            WHAT OUR CLIENTS SAY
          </p>
          <Slider {...settin} ref={slider}>
            <div className="w-100">
              <div className="row text-center text-lg-start justify-content-between">
                <div className="col-lg-3 col-12">
                  <div className=" d-flex align-items-center flex-column pt-5">
                    <Image
                      src="/assets/images/png/whatOurClient.png"
                      alt="What_our_clint_img"
                    />
                    <p className=" ff_bebas_neue fs_lg fw-normal tc_body mb-0 pt-4">
                      Leslie Alexander
                    </p>
                    <p className=" ff_Montserrat fs_sm fw-normal text-white pt-2">
                      Client of agency
                    </p>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className=" d-flex pt-5">
                    <Image
                      className=" pe-5 d-none d-lg-block"
                      src="/assets/images/svg/SliderLeftBorder.svg"
                      alt="SliderLeftBorder"
                    />
                    <div className="">
                      <p className=" ff_Montserrat fs_md fw-bold text-white ps-md-3">
                        “Pellentesque eget. Ac tortor adipiscing mattis netus
                        enim non. Ornare cum eu elit in senectus. At semper
                        tellus quis scelerisque purus. Cras fermentum porttitor
                        est in aliquam molestie. Orci volutpat id in in iaculis
                        fringilla suspendisse viverra. Suspendisse eu curabitur
                        sed neque id imperdiet. Dis pharetra lobortis felis ante
                        magnis ante elit viverra risus. Adipiscing massa aliquet
                        purus blandit a con”
                      </p>
                      <div className="pt-5 ps-md-3 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <button
                          onClick={() => slider.current.slickPrev()}
                          className=" bg-transparent border-0"
                        >
                          <Image
                            className="w-100"
                            src="/assets/images/svg/SliderLeftButton.svg"
                            alt="SliderLeftButton"
                          />
                        </button>
                        <button
                          onClick={() => slider.current.slickNext()}
                          className="ms-4 bg-transparent border-0"
                        >
                          <Image
                            className="w-100"
                            src="/assets/images/svg/SliderRightButton.svg"
                            alt="SliderRightButton"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100">
              <div className="row text-center text-lg-start justify-content-between">
                <div className="col-lg-3 col-12">
                  <div className=" d-flex align-items-center flex-column pt-5">
                    <Image
                      src="/assets/images/png/whatOurClient.png"
                      alt="What_our_clint_img"
                    />
                    <p className=" ff_bebas_neue fs_lg fw-normal tc_body mb-0 pt-4">
                      Leslie Alexander
                    </p>
                    <p className=" ff_Montserrat fs_sm fw-normal text-white pt-2">
                      Client of agency
                    </p>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className=" d-flex pt-5">
                    <Image
                      className=" pe-5 d-none d-lg-block"
                      src="/assets/images/svg/SliderLeftBorder.svg"
                      alt="SliderLeftBorder"
                    />
                    <div className="">
                      <p className=" ff_Montserrat fs_md fw-bold text-white ps-md-3">
                        “Pellentesque eget. Ac tortor adipiscing mattis netus
                        enim non. Ornare cum eu elit in senectus. At semper
                        tellus quis scelerisque purus. Cras fermentum porttitor
                        est in aliquam molestie. Orci volutpat id in in iaculis
                        fringilla suspendisse viverra. Suspendisse eu curabitur
                        sed neque id imperdiet. Dis pharetra lobortis felis ante
                        magnis ante elit viverra risus. Adipiscing massa aliquet
                        purus blandit a con”
                      </p>
                      <div className="pt-5 ps-md-3 d-flex align-items-center justify-content-center justify-content-lg-start">
                        <button
                          onClick={() => slider.current.slickPrev()}
                          className=" bg-transparent border-0"
                        >
                          <Image
                            className="w-100"
                            src="/assets/images/svg/SliderLeftButton.svg"
                            alt="SliderLeftButton"
                          />
                        </button>
                        <button
                          onClick={() => slider.current.slickNext()}
                          className="ms-4 bg-transparent border-0"
                        >
                          <Image
                            className="w-100"
                            src="/assets/images/svg/SliderRightButton.svg"
                            alt="SliderRightButton"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default WhatOur;
