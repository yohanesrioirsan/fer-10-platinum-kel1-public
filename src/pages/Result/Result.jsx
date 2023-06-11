import React from "react";
import SearchResult from "../../components/SearchResult";
import Backdrop from "../../components/Backdrop";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";

function Result() {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <SearchResult />
      <Footer />
    </>
  );
}

export default Result;
