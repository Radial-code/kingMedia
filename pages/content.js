import CreateSec from "../Components/CreateSec";
import NequeSec from "../Components/NequeSec";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import SaveTime from "../Components/SaveTime";
import ContentMediaCards from "../Components/ContentMediaCards";
import BackToTop from "../Components/BackToTop";
import Image from "next/image";
import YourLeads from "../components/YourLeads";
import MediaNav from "../components/MediaNav";

const Content = () => {
  return (
    <>
      <MediaNav />
      <div className=" position-relative">
        <Image
          width={70}
          height={91}
          className=" position-absolute bottom-0 end-0 d-none d-lg-block"
          src="/assets/images/svg/contactUsRight.svg"
          alt="rightSquare"
        />
        <YourLeads />
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
