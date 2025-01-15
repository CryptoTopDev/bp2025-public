import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import { Banner } from "../components/home/Banner";
import { Mission } from "../components/home/Mission";
import { Initiative } from "../components/home/Initiative";
import { Join } from "../components/home/Join";
import { Helmet } from "react-helmet";
export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | 1.8 Trillion </title>
        <meta name="description" content="BP2025 is a movement to direct the $1.8 trillion Black community contribution to the U.S. economy toward strengthening internal infrastructure. Join us in creating systems that empower growth, unity, and independence." />
      </Helmet>
      {/* header */}
      <Header active={1} />

      <section>
        {/* banner */}
        <Banner />

        {/* missio  */}
        <Mission />

        {/* initiative */}
        <Initiative />

        {/* join */}
        <Join />
      </section>

      {/* footer */}
      <Footer active={1} />
    </div>
  );
};
