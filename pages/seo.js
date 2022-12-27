import NequeSec from "../Components/NequeSec";
import Footer from "../Components/Footer";
import WhyKingMedia from "../Components/WhyKingMedia";
import Intent_and_purpose from "../Components/Intent_and_purpose";
import Seo_checklist from "../Components/Seo_checklist";
import BackToTop from "../Components/BackToTop";
import Media_nav from "../Components/Media_nav";
import Image from "next/image";

const Seo = () => {
  return (
    <>
      <Media_nav />
      <div className=" position-relative">
        <Image
          width={50}
          height={91}
          className=" position-absolute bottom-0 end-0 d-none d-lg-block"
          src="/assets/images/svg/contactUsRight.svg"
          alt="rightSquare"
        />
        <Intent_and_purpose />
      </div>
      <WhyKingMedia />
      <div className=" position-relative">
        <Image
          width={50}
          height={123}
          className=" position-absolute top-0 start-0 d-none d-lg-block"
          src="/assets/images/svg/secLeft.svg"
          alt="rightSquare"
        />
        <Image
          width={50}
          height={123}
          className=" position-absolute bottom-0 end-0 d-none d-lg-block"
          src="/assets/images/svg/seoRightCircle.svg"
          alt="rightSquare"
        />
        <Seo_checklist />
      </div>
      <NequeSec />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Seo;
