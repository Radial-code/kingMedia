import Hero from "../Components/Hero";
import Marketing_plans from "../Components/Marketing_plans";
import ExpSec from "../Components/ExpSec";
import Your_business from "../Components/Your_business";
import NequeSec from "../Components/NequeSec";
import WhatOur from "../Components/WhatsOur";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import Work_2 from "../Components/Work_2";

const HomePageHero = () => {
  return (
    <>
      <Hero />
      <Marketing_plans />
      <Your_business />
      <Work_2 />
      <ExpSec />
      <NequeSec />
      <WhatOur />
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePageHero;
