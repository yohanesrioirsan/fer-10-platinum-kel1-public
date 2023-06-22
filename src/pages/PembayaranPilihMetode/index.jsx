import React from "react";
import Hero from "../../components/Hero";
import Backdrop from "../../components/Backdrop";
import Footer from "../../components/Footer";
import PilihMetode from "./components/PilihMetode";

function PembayaranPilihMetode() {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <PilihMetode />
      <Footer />
    </>
  );
}

export default PembayaranPilihMetode;
