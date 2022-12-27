import Link from "next/link";
import Image from "next/image";
const Marketing_plans = () => {
  return (
    <>
      <section id="SERVICES" className="bg-black pt-5 position-relative">
        <Image
          width={45}
          height={86}
          className="position-absolute d-none d-sm-inline-block half_circle top-0 start-0"
          src="/assets/images/svg/half_circle.svg"
          alt="half_circle"
        />
        <div className="container">
          <div className="row align-items-center justify-content-between text-white text-center text-md-start mt-4 mt-md-5 pt-md-5">
            <div className="col-md-5 col-lg-3">
              <h2 className="ff_bebas_neue fw-normal fs_xl mb-0">
                Marketing Plans Designed For{" "}
                <span className="tc_body">You</span>
              </h2>
            </div>
            <div className="col-md-6 mt-3 mt-md-0">
              <p className="ff_Montserrat fw-normal fs_sm para_max_width">
                Et libero quis vitae massa lacus. Turpis magna semper sed ut
                purus gravida pharetra feugiat. Ut sem nec viverra nibh. Ante
                imperdiet donec.
              </p>
              <span className="d-flex align-items-center justify-content-center justify-content-md-start transition_200ms right_arrow right_arrow_parent">
                <a
                  className="ff_bebas_neue fw-normal fs_md tc_body a_hover"
                  href="#"
                >
                  ALL SERVICES{" "}
                </a>
                <a className="ms-2 d-flex align-items-center" href="#">
                  <Image
                    width={20}
                    height={10}
                    className="transition_200ms"
                    src="/assets/images/svg/right_arrow_icon.svg"
                    alt="right_arrow_icon"
                  />
                </a>
              </span>
            </div>
          </div>{" "}
          <div className="row text-white mt-5 justify-content-center">
            <div className="col-11 col-sm-6 col-lg-4">
              <div className="card_hover h-100 transition_500ms py-4 px-3 px-xl-5">
                <span className="on_hover transition_500ms">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.2761 9.31075V14.6563C25.2761 14.8121 25.1548 14.9356 24.9979 14.9367C23.6248 14.9457 22.0937 15.1482 20.4758 15.5922C20.2944 15.6422 20.1141 15.5109 20.1141 15.3229V9.99174C20.1141 9.86378 20.1976 9.74805 20.32 9.71133C21.8344 9.24955 23.4267 9.0359 24.9846 9.01921C25.1448 9.0181 25.2761 9.15051 25.2761 9.31075ZM14.0486 15.2428C13.9596 15.6289 13.6157 15.8893 13.2363 15.8893C13.174 15.8893 13.1105 15.8826 13.0471 15.867C11.7285 15.5621 10.2786 15.3629 8.73748 15.2761C8.27681 15.2505 7.92518 14.8555 7.95078 14.396C7.97748 13.9364 8.37695 13.5759 8.83095 13.6093C10.4667 13.7016 12.0123 13.9141 13.4232 14.2413C13.8739 14.347 14.1532 14.7943 14.0486 15.2428ZM7.95189 9.6123C7.97859 9.15163 8.37807 8.80334 8.83206 8.82559C10.4678 8.91795 12.0134 9.13048 13.4243 9.45763C13.8728 9.56223 14.1532 10.0095 14.0486 10.458C13.9596 10.8441 13.6157 11.1045 13.2363 11.1045C13.174 11.1045 13.1105 11.0978 13.0471 11.0822C11.7285 10.7773 10.2786 10.5782 8.73748 10.4914C8.27792 10.4658 7.9263 10.0719 7.95189 9.6123Z"
                      fill="#FF7E06"
                    />
                    <path
                      d="M29.9273 0.795044H3.22157C1.99199 0.795044 0.996094 1.79094 0.996094 3.02052V21.9371C0.996094 23.1666 1.99199 24.1625 3.22157 24.1625H7.67252V31.6513C7.67252 31.9194 8.00078 32.0496 8.18438 31.8549L15.4617 24.1625H29.9273C31.1569 24.1625 32.1528 23.1666 32.1528 21.9371V3.02052C32.1528 1.79094 31.1569 0.795044 29.9273 0.795044ZM15.7399 21.0858C12.6765 19.9864 8.71182 19.6081 5.75861 19.9664C5.58948 19.9864 5.44704 19.8574 5.44704 19.686V4.96336C5.44704 4.81759 5.55053 4.69185 5.6963 4.67293C8.65507 4.30128 12.6554 4.67739 15.7399 5.78456V21.0858ZM27.7018 19.686C27.7018 19.8574 27.5594 19.9864 27.3902 19.9664C24.4381 19.6081 20.4723 19.9864 17.409 21.0858V5.78567C20.4935 4.6785 24.4938 4.30239 27.4525 4.67405C27.5983 4.69185 27.7018 4.81759 27.7018 4.96336V19.686Z"
                      fill="#FF7E06"
                    />
                  </svg>
                </span>
                <h3 className="ff_bebas_neue fw-normal fs_lg my-3">
                  CONTENT CREATION
                </h3>
                <p className="ff_Montserrat fw-normal fs_sm">
                  Placerat a nulla viverra dignissim. Amet dictum non aliquam
                  nec pretium id donec. Urna gravida ni.
                </p>
              </div>
            </div>

            <div className="col-11 col-sm-6 col-lg-4 mt-4 mt-sm-0">
              <div className="card_hover h-100 transition_500ms py-4 px-3 px-xl-5">
                <span className="on_hover transition_500ms">
                  <svg
                    width="44"
                    height="30"
                    viewBox="0 0 44 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.2823 5.15121C41.9579 4.95053 41.589 4.84917 41.2181 4.84917C40.9079 4.84917 40.5978 4.92012 40.312 5.06202L35.1369 7.65058V6.87624C35.1369 2.58357 34.118 0.795044 29.0557 0.795044H6.75795C3.40519 0.795044 0.676758 3.52347 0.676758 6.87624V23.0928C0.676758 26.4455 3.40519 29.174 6.75795 29.174H29.0557C33.618 29.174 35.1369 27.1843 35.1369 23.0928V22.3184L40.312 24.905C40.5978 25.0489 40.9079 25.1198 41.2181 25.1198C41.589 25.1198 41.9579 25.0185 42.2823 24.8178C42.8802 24.4468 43.2451 23.7961 43.2451 23.0928V6.87624C43.2451 6.17285 42.8802 5.52216 42.2823 5.15121ZM10.8121 18.0251C9.13165 18.0251 7.77148 16.6649 7.77148 14.9845C7.77148 13.3041 9.13165 11.9439 10.8121 11.9439C12.4925 11.9439 13.8527 13.3041 13.8527 14.9845C13.8527 16.6649 12.4925 18.0251 10.8121 18.0251Z"
                      fill="#FF7E06"
                    />
                  </svg>
                </span>
                <h3 className="ff_bebas_neue fw-normal fs_lg my-3">
                  vertical video marketing{" "}
                </h3>
                <p className="ff_Montserrat fw-normal fs_sm">
                  Nunc vitae quis rhoncus rhoncus tellus dignissim mattis
                  phasellus. Sit tortor libero fusce consectetur sit.
                </p>
              </div>
            </div>
            <div className="col-11 col-sm-6 col-lg-4 mt-4 mt-lg-0">
              <div className="card_hover h-100 transition_500ms py-4 px-3 px-xl-5">
                <span className="on_hover transition_500ms">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7778 19.1669C9.24922 19.1669 6.38877 16.3064 6.38877 12.7779C6.38877 9.24936 9.24922 6.38892 12.7778 6.38892C16.3063 6.38892 19.1667 9.24936 19.1667 12.7779C19.1667 16.3064 16.3063 19.1669 12.7778 19.1669Z"
                      fill="#FF7E06"
                    />
                    <path
                      d="M5.32404 0H26.6207C27.3198 0 28.0122 0.137713 28.6581 0.405277C29.3041 0.672841 29.891 1.06502 30.3854 1.55941C31.3839 2.55788 31.9448 3.9121 31.9448 5.32416V26.6208C31.9448 28.0328 31.3839 29.3871 30.3854 30.3855C29.891 30.8799 29.3041 31.2721 28.6581 31.5397C28.0122 31.8072 27.3198 31.9449 26.6207 31.9449H5.32404C3.91198 31.9449 2.55776 31.384 1.55929 30.3855C0.560816 29.3871 -0.00012064 28.0328 -0.00012064 26.6208V5.32416C-0.00012064 4.62498 0.137592 3.93265 0.405156 3.28669C0.67272 2.64073 1.0649 2.0538 1.55929 1.55941C2.05368 1.06502 2.64061 0.672841 3.28657 0.405277C3.93253 0.137713 4.62486 0 5.32404 0V0ZM12.7779 21.2966C14.6697 21.299 16.5074 20.6652 17.9955 19.4971L25.8646 27.3768C25.9636 27.4766 26.0814 27.5558 26.2112 27.6099C26.3409 27.664 26.4801 27.6918 26.6207 27.6918C26.7612 27.6918 26.9004 27.664 27.0302 27.6099C27.1599 27.5558 27.2777 27.4766 27.3767 27.3768C27.4765 27.2778 27.5557 27.1601 27.6098 27.0303C27.6638 26.9005 27.6917 26.7614 27.6917 26.6208C27.6917 26.4802 27.6638 26.341 27.6098 26.2113C27.5557 26.0815 27.4765 25.9637 27.3767 25.8648L19.4969 17.9957C20.665 16.5075 21.2989 14.6698 21.2965 12.778C21.2965 11.0931 20.7969 9.44615 19.8609 8.04527C18.9248 6.64438 17.5944 5.55253 16.0378 4.90777C14.4812 4.26301 12.7684 4.09432 11.116 4.42301C9.46349 4.7517 7.94562 5.56303 6.75426 6.75438C5.56291 7.94574 4.75158 9.46361 4.42289 11.1161C4.09419 12.7685 4.26289 14.4813 4.90765 16.0379C5.5524 17.5945 6.64426 18.9249 8.04515 19.861C9.44603 20.797 11.093 21.2966 12.7779 21.2966V21.2966Z"
                      fill="#FF7E06"
                    />
                  </svg>
                </span>
                <h3 className="ff_bebas_neue fw-normal fs_lg my-3">
                  SEARCH ENGINE OPTIMIZATION
                </h3>
                <p className="ff_Montserrat fw-normal fs_sm">
                  Praesent curabitur varius ornare et gravida ultrices. At
                  posuere quam et morbi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marketing_plans;
