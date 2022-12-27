import NequeSec from "../Components/NequeSec";
import Footer from "../Components/Footer";
import WhyKingMedia from "../Components/WhyKingMedia";
import BackToTop from "../Components/BackToTop";
import Image from "next/image";
import SeoChecklist from "../components/SeoChecklist";
import IntentAndPurpose from "../components/IntentAndPurpose";
import MediaNav from "../components/MediaNav";

const Seo = () => {
  return (
    <>
      <MediaNav />
      <div className=" position-relative">
        <Image
          width={50}
          height={91}
          className=" position-absolute bottom-0 end-0 d-none d-lg-block"
          src="/assets/images/svg/contactUsRight.svg"
          alt="rightSquare"
        />
        <IntentAndPurpose />
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
        <SeoChecklist />
      </div>
      <NequeSec />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Seo;
