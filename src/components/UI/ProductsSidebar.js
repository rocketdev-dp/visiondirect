import React from "react";
import classes from "./ProductsSidebar.module.css";

const ProductsSidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.filter}>
        <h4>Shop by Brands</h4>
        <ul className={classes.filter_list}>
          <li><a href="#">Acuvue</a></li>
          <li><a href="#">Air Optix</a></li>
          <li><a href="#">Biofinity</a></li>
          <li><a href="#">Clariti</a></li>
          <li><a href="#">everclear</a></li>
          <li><a href="#">Dailies</a></li>
          <li><a href="#">Freshlook</a></li>
        </ul>
      </div>
      <div className={classes.filter}>
        <h4>Optician Equivalents</h4>
        <ul className={classes.filter_list}>
          <li><a href="#">Boots</a></li>
          <li><a href="#">Daysoft</a></li>
          <li><a href="#">Hubble</a></li>
          <li><a href="#">Specsavers | easyvision</a></li>
          <li><a href="#">Vision Express</a></li>
          <li><a href="#">Waldo</a></li>
        </ul>
      </div>
      <div className={classes.filter}>
        <h4>Shop by Type</h4>
        <ul className={classes.filter_list}>
          <li><a href="#">Contact Lenses</a></li>
          <li><a href="#">Torics for Astigmatism</a></li>
          <li><a href="#">Coloured Contact Lenses</a></li>
          <li><a href="#">Multifocal Contact Lenses</a></li>
          <li><a href="#">Silicone Hydrogel Lenses</a></li>
          <li><a href="#">Contact Lens Solutions</a></li>
          <li><a href="#">Eye Drops</a></li>
        </ul>
      </div>
      <div className={classes.filter}>
        <h4>Shop by Wear</h4>
        <ul className={classes.filter_list}>
          <li><a href="#">Daily Lenses</a></li>
          <li><a href="#">Monthly Lenses</a></li>
          <li><a href="#">Two Weekly Lenses</a></li>
          <li><a href="#">Extended Wear Lenses</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsSidebar;
