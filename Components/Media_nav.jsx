import Link from "next/link";
import { useState } from "react";
import { Image } from "react-bootstrap";
const Media_nav = () => {
  const [open, setclose] = useState(false);
  // if (open) {
  //   document.body.classList.add("overflow-hidden");
  // } else {
  //   document.body.classList.remove("overflow-hidden");
  // }
  return (
    <>
      <nav className="z_index bg-white position-relative">
        <div className="container">
          <div className="d-flex align-items-lg-center justify-content-between flex-lg-row flex-column py-3">
            <div className="d-flex align-items-center justify-content-between">
              <Link href="/">
                <button className="bg-transparent border-0">
                  {" "}
                  <Image
                    src="./assets/images/svg/king_media_logo.svg"
                    alt="king_media_logo"
                  />
                </button>
              </Link>
              <button
                onClick={() => setclose(true)}
                className=" d-flex flex-column gap-1 d-lg-none bg-transparent border-0"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
            <div className={open ? "ms-0 nav_open" : "nav_open ms_100"}>
              <ul className="d-flex align-items-center h-100 justify-content-center justify-content-lg-between flex-lg-row flex-column gap-4 mb-0 ps-0 ">
                <li onClick={() => setclose(false)} className="me-3">
                  <Link href="/about">
                    <button className="border-0 text-black nav_a_clr bg-transparent ff_Montserrat fw-normal fs_sm">
                      ABOUT
                    </button>
                  </Link>
                </li>
                <li onClick={() => setclose(false)} className="me-3">
                  <Link href="/seo">
                    <button className="border-0 text-black nav_a_clr bg-transparent ff_Montserrat fw-normal fs_sm">
                      SEO
                    </button>
                  </Link>
                </li>
                <li onClick={() => setclose(false)} className="">
                  <Link href="/content">
                    <button className="border-0 text-black nav_a_clr bg-transparent ff_Montserrat fw-normal fs_sm">
                      CONTENT CREATION
                    </button>
                  </Link>
                </li>
                <Link href="contact">
                  <button
                    onClick={() => setclose(false)}
                    className="text-black border-0 d-lg-none ff_Montserrat fw-bold fs_sm bg_body btn_px_py border-0"
                    href="#"
                  >
                    CONTACT US
                  </button>
                </Link>
                <button
                  onClick={() => setclose(false)}
                  className=" d-flex flex-column btn btn-close btn-close-black fs-3 position-absolute top-0 end-0 mt-4 me-4 d-lg-none border-0"
                ></button>
              </ul>
            </div>
            <Link href="contact">
              <button
                className="text-white bt_hover border-0 ff_Montserrat fw-bold fs_sm bg_body btn_px_py border-0 d-none d-lg-block"
                href="#"
              >
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Media_nav;
