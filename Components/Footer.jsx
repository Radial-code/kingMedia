import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className=" text-center pb-5">
            <Image
              width="226"
              className="pt-lg-5 mt-lg-5"
              src="/assets/images/svg/footerKing.svg"
              alt="footerKing"
            />
            <p className=" ff_Montserrat fw-normal fs_sm text-white pt-5">
              Et libero quis vitae massa lacus. Turpis magna semper
              <span className=" d-block">
                sed ut purus gravida pharetra feugiat. Ut sem nec
              </span>
            </p>
            <div className=" pt-5  py-sm-5 mb-lg-5">
              <a href="">
                <Image
                  className=" px-3 icon_scale footer_icon_trans"
                  src="/assets/images/svg/twitter.svg"
                  alt="twitter"
                />
              </a>
              <a href="">
                <Image
                  className=" px-3 icon_scale footer_icon_trans"
                  src="/assets/images/svg/footerInstagram.svg"
                  alt="instagram"
                />
              </a>
              <a href="">
                <Image
                  className=" px-3 icon_scale footer_icon_trans"
                  src="/assets/images/svg/facebook.svg"
                  alt="facebook"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border_top">
          <p className=" text-white text-center py-3">@copyright2022</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
