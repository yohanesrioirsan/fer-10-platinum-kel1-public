import React from "react";

import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import SearchForm from "../../components/SearchForm";
import SearchDetail from "../../components/SearchDetail";

function Detail() {
  return (
    <div>
      <Hero withRentButton={false} withSearchForm withHeroContent={false} />
      <SearchForm />
      <SearchDetail />
      <Footer />
    </div>
  );
}

export default Detail;
