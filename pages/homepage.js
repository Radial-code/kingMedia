import Hero from "../components/Hero";
import ExpSec from "../components/ExpSec";
import NequeSec from "../components/NequeSec";
import WhatOur from "../components/WhatsOur";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import WorkSec from "../components/WorkSec";
import MarketingPlans from "../components/MarketingPlans";
import YourBusiness from "../components/YourBusiness";

const HomePageHero = () => {
  return (
    <>
      <Hero />
      <MarketingPlans />
      <YourBusiness />
      <WorkSec />
      <ExpSec />
      <NequeSec />
      <WhatOur />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePageHero;
