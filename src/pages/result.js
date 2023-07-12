import React from "react";
import SearchResult from "@/components/SearchResult";
import Backdrop from "@/components/Backdrop";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Auth from "@/components/Auth";

function Result() {
  return (
    <Auth>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <SearchResult />
      <Footer />
    </Auth>
  );
}

export default Result;
