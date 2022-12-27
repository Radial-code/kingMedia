import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "next/image";

// import ProgressBar from "react-b"
const StatisticsSec = () => {
  return (
    <>
      {" "}
      <div className=" position-relative pb-4 py-lg-5">
        <img
          className=" position-absolute exp_img_top end-0 d-none d-md-block"
          src="/assets/images/png/our_top_left.png"
          alt="img"
        />
        <div className="container pb-b py-md-5">
          <div className="row text-center text-sm-start justify-content-between flex-column flex-sm-row py-4">
            <div className="col-12 col-sm-4">
              <h2 className=" ff_bebas_neue fw-normal fs_xl text-white">
                OUR STATISTICS
              </h2>
            </div>
            <div className="col-12 col-sm-6">
              <p className=" ff_Montserrat fw-normal fs_xsm text-white">
                Vitae diam ut nullam massa. Commodo dui sed vitae mauris.
                Scelerisque cursus quisque nisi odio lectus ac vitae dictum. Ac
                scelerisque ac erat magna. Cursus in.
              </p>
            </div>
          </div>
          <div className=" d-flex align-items-center pt-4 pt-sm-5">
            <p className=" ff_bebas_neue fw-normal mb-0 pb-2 fs_lg tc_body pe-4">
              92%
            </p>
            <p className=" ff_Montserrat fw-normal mb-0 pb-2 fs_sm text-white">
              Consultancy
            </p>
          </div>
          <ProgressBar now={92} />
          <div className=" d-flex align-items-center pt-4 pt-sm-5">
            <p className=" ff_bebas_neue fw-normal mb-0 pb-2 fs_lg tc_body pe-4">
              38%
            </p>
            <p className=" ff_Montserrat fw-normal mb-0 pb-2 fs_sm text-white">
              PR
            </p>
          </div>
          <ProgressBar now={38} />
          <div className=" d-flex align-items-center pt-4 pt-sm-5">
            <p className=" ff_bebas_neue fw-normal mb-0 pb-2 fs_lg tc_body pe-4">
              100%
            </p>
            <p className=" ff_Montserrat fw-normal mb-0 pb-2 fs_sm text-white">
              Quality
            </p>
          </div>
          <ProgressBar now={100} />
          <div className=" d-flex align-items-center pt-4 pt-sm-5">
            <p className=" ff_bebas_neue fw-normal mb-0 pb-2 fs_lg tc_body pe-4">
              68%
            </p>
            <p className=" ff_Montserrat fw-normal mb-0 pb-2 fs_sm text-white">
              Marketing
            </p>
          </div>
          <ProgressBar now={68} />
        </div>
      </div>
    </>
  );
};

export default StatisticsSec;
