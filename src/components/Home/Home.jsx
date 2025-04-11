import React from "react";
import Banner from "./Banner";
import Solution from "./Solution";
import Highlight from "./Highlight";
import CustomerFeedback from "./Customer";
import Articule from "./Articule";
import Events from "./Events";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Solution />
      <Highlight />
      <CustomerFeedback />
      <Articule />
      <Events />
    </React.Fragment>
  );
};

export default Home;
