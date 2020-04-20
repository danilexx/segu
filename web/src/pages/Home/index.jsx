import React, { Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import MobileText from "./MobileText";
import BigScreenText from "./BigScreenText";

const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Fragment>{isTabletOrMobile ? <MobileText /> : <BigScreenText />}</Fragment>
  );
};

export default Home;
