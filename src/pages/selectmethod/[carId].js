import React, { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import PilihMetode from "@/containers/SelectMethod/PilihMetode";
import CardConfirmPayment from "@/containers/SelectMethod/CardConfirmPayment";
import Auth from "@/components/Auth";

function PembayaranPilihMetode() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(1);
  }, []);

  return (
    <Auth>
      <>
        <Backdrop triggerClass="search-input" />
        <Hero
          withRentButton={false}
          withSearchForm={false}
          withSearchFormDisable
          withHeroContent={false}
        />
        {progress === 1 ? (
          <PilihMetode setProgress={setProgress} />
        ) : progress === 2 ? (
          <CardConfirmPayment />
        ) : null}
        <Footer />
      </>
    </Auth>
  );
}

export default PembayaranPilihMetode;
