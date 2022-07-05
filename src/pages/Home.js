import React, { Fragment } from "react";
import Banner from "../components/Home/Banner";
import EyeCareCentre from "../components/Home/EyeCareCentre";
import PostContent from "../components/Home/PostContent";
import Products from "../components/Home/Products";
import Statistic from "../components/Home/Statistic";
import TrustPilot from "../components/Home/TrustPilot";

const Home = () => {
  return (
    <Fragment>
      <Statistic />
      <Banner />
      <Products />
      <TrustPilot />
      <PostContent />
      <EyeCareCentre />
    </Fragment>
  );
};

export default Home;
