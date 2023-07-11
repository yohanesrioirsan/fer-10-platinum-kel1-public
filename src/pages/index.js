import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import OurService from "../containers/Home/OurService";
import WhyUs from "../containers/Home/WhyUs";
import Testimonial from "../containers/Home/Testimonial";
import CtaBanner from "../containers/Home/CtaBanner";
import FreqAsk from "../containers/Home/FreqAsk";
import { useRouter } from "next/router";

function Home() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === "" || token === null || token === undefined) {
            router.push("/signin");
        }
    }, []);

    return (
        <div>
            <Hero />
            <OurService />
            <WhyUs />
            <Testimonial />
            <CtaBanner />
            <FreqAsk />
            <Footer />
        </div>
    );
}

export default Home;
