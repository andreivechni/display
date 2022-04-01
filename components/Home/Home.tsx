import React from "react";

import Hero from "./Hero";
import KnowUs from "./KnowUs";
import Portfolio from "./Portfolio";
import styles from "./Home.module.scss";

const Home = () => {
  

  return (
    <div className={styles.root}>
      <Hero />
      <KnowUs />
      <Portfolio />
    </div>
  );
};

export default Home;
