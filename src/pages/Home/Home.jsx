import React , { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import OurService from "./components/OurService";
import WhyUs from "./components/WhyUs";
import Testimonial from "./components/Testimonial";
import CtaBanner from "./components/CtaBanner";
import Footer from "../../components/Footer";
import FreqAsk from "./components/FreqAsk";

function Home() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
      if(token === "" || token === null ||token === undefined) {
        navigate("/signin")
      }
    }, [])
    
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
