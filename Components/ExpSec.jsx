import React from "react";
import Image from "next/image";
const ExperienceSec = () => {
  return (
    <>
      <div className="position-relative">
        <img
          className="position-absolute exp_img_top start-0 d-none d-md-block"
          src="/assets/images/png/exp_left_top.png"
          alt="img"
        />
        <div className=" container py-5">
          <div className="row justify-content-between text-center text-md-start align-items-center flex-column flex-sm-row">
            <div className="col-md-5">
              <h2 className="ff_bebas_neue fw-normal fs_xl text-white">
                Experience of more than 10 years
              </h2>
              <p className=" ff_Montserrat fw-normal fs_xsm text-white">
                Maecenas praesent risus mi non augue morbi risus euismod purus.
                Mauris duis volutpat donec dui in id magna viverra metus. Cursus
                in auctor lobortis non. Sagittis faucibus dignissim facilisi
                enim curabitur porttitor arcu aliquet.
              </p>
            </div>
            <div className="col-md-6 ">
              <div className=" d-flex align-items-center justify-content-around">
                <Image
                  width={185}
                  height={180}
                  className="h-auto w_xxl_25"
                  src="/assets/images/png/pr.png"
                  alt="img"
                />
                <Image
                  width={185}
                  height={180}
                  className="h-auto w_xxl_25"
                  src="/assets/images/png/ps.png"
                  alt="img"
                />
                <Image
                  width={185}
                  height={180}
                  className="h-auto w_xxl_25"
                  src="/assets/images/png/adobe.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSec;
