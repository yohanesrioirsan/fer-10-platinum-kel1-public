import React from "react";
import { Container } from "react-bootstrap";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import SearchDetail from "@/components/SearchDetail";
import Auth from "@/components/Auth";

function Detail() {
  return (
    <Auth>
      <div>
        <Hero
          withRentButton={false}
          withSearchForm={false}
          withHeroContent={false}
        />
        <Container>
          <SearchForm />
        </Container>
        <SearchDetail />
        <Footer />
      </div>
    </Auth>
  );
}

export default Detail;
