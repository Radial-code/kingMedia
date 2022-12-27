import React from "react";
import Image from "next/image";
const CreateSec = () => {
  return (
    <>
      <div className="container py-5 mb-5">
        <div className="row flex-column-reverse flex-sm-row align-items-lg-end">
          <div className="col-12 col-sm-6">
            <Image
              width={636}
              height={704.81}
              className="w_xxl_100 mt-2 mt-sm-0 h-auto mt-xl-5"
              src="/assets/images/png/cre_1.png"
              alt="img"
            />
          </div>
          <div className="col-12 text-center text-sm-start col-sm-6">
            <h2 className="ps-lg-4 ff_bebas_neue fw-normal fs_xl text-white">
              Create, Post, And Grow Organically
            </h2>
            <p className="ps-lg-4 ff_Montserrat fw-normal fs_xsm text-white pt-md-3">
              Sapien nulla pharetra nunc scelerisque pharetra. Justo pharetra
              tristique nibh eu orci. Risus parturient eget ut quis enim quam
              faucibus. Sagittis a adipiscing arcu erat.
            </p>
            <Image
              width={636}
              height={468.92}
              className="w_xxl_100 mt-2 mt-sm-0 h-auto pt-md-4 pt-3"
              src="/assets/images/png/cre_2.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSec;
