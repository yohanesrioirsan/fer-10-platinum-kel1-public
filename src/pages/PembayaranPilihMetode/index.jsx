import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import Backdrop from "../../components/Backdrop";
import Footer from "../../components/Footer";
import PilihMetode from "./components/PilihMetode";
import CardConfirmPayment from "../../containers/CardConfirmPayment/CardConfirmPayment";

function PembayaranPilihMetode() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(1);
    }, []);

    return (
        <>
            <Backdrop triggerClass="search-input" />
            <Hero withRentButton={false} withSearchForm={false} withSearchFormDisable withHeroContent={false} />
            {
                // eslint-disable-next-line no-nested-ternary
                progress === 1 ? <PilihMetode setProgress={setProgress}/> : progress === 2 ? <CardConfirmPayment /> : null
            }
            <Footer />
        </>
    );
}

export default PembayaranPilihMetode;
