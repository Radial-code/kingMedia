import CreateSec from "../Components/CreateSec";
import NequeSec from "../Components/NequeSec";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import SaveTime from "../Components/SaveTime";
import ContentMediaCards from "../Components/ContentMediaCards";
import Your_leads from "../Components/Your_leads";
import BackToTop from "../Components/BackToTop";
import Media_nav from "../Components/Media_nav";
import Image from "next/image";

const Content = () => {
  return (
    <>
      <Media_nav />
      <div className=" position-relative">
        <Image
          width={70}
          height={91}
          className=" position-absolute bottom-0 end-0 d-none d-lg-block"
          src="/assets/images/svg/contactUsRight.svg"
          alt="rightSquare"
        />
        <Your_leads />
      </div>
      <SaveTime />
      <CreateSec />
      <ContentMediaCards />
      <NequeSec />
      <ContactUs />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Content;
