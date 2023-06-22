import React from "react";
import Hero from "../../components/Hero";
import Backdrop from "../../components/Backdrop";
import Footer from "../../components/Footer";

function PembayaranPilihMetode() {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <Footer />
    </>
  );
}

export default PembayaranPilihMetode;
