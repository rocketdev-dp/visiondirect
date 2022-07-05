import React from "react";
import TopBar from "./TopBar";
import classes from "./MainLayout.module.css";
import Navigation from "./Navigation";
import FooterBottom from "./FooterBottom";

const MainLayout = (props) => {
  return (
    <div className={classes.container}>
      <TopBar />
      <Navigation onshowCart={props.onShowCart} />
      <main>{props.children}</main>
      <FooterBottom />
    </div>
  );
};

export default MainLayout;
