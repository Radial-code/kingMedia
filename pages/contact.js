import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import MapSec from "../Components/MapSec";
import NequeSec from "../Components/NequeSec";
import BackToTop from "../Components/BackToTop";
import Media_nav from "../Components/Media_nav";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      <Media_nav />
      <div className=" position-relative">
        <Image
          width={76}
          height={91}
          className=" position-absolute bottom-0 end-0 d-none d-lg-block"
          src="/assets/images/svg/contactUsRight.svg"
          alt="rightSquare"
        />
        <ContactUs />
      </div>
      <MapSec />
      <div className=" position-relative">
        <Image
          width={50}
          height={70}
          className=" position-absolute bottom-0 start-0 d-none d-lg-block"
          src="/assets/images/svg/nequeLeft.svg"
          alt="leftCircle"
        />
        <NequeSec />
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Contact;
