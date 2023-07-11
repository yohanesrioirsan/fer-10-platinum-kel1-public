import React from "react";
import Backdrop from "@/components/Backdrop";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

function Search() {
  return (
    <>
      <Backdrop triggerClass="search-input" />
      <Hero withRentButton={false} withSearchForm />
      <Footer />
    </>
  );
}

export default Search;
