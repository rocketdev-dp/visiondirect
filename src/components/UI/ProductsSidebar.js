import React from "react";
import classes from "./ProductsSidebar.module.css";

const ProductsSidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.filter}>
        <h4>Shop by Brands</h4>
        <ul className={classes.filter_list}>
          <li>Acuvue</li>
          <li>Air Optix</li>
          <li>Biofinity</li>
          <li>Clariti</li>
          <li>everclear</li>
          <li>Dailies</li>
          <li>Freshlook</li>
        </ul>
      </div>
      <div className={classes.filter}>
        <h4>Optician Equivalents</h4>
        <ul className={classes.filter_list}>
          <li>Boots</li>
          <li>Daysoft</li>
          <li>Hubble</li>
          <li>Specsavers | easyvision</li>
          <li>Vision Express</li>
          <li>Waldo</li>
        </ul>
      </div>
      <div className={classes.filter}>
        <h4>Shop by Type</h4>
        <ul className={classes.filter_list}>
          <li>Contact Lenses</li>
          <li>Torics for Astigmatism</li>
          <li>Coloured Contact Lenses</li>
          <li>Multifocal Contact Lenses</li>
          <li>Silicone Hydrogel Lenses</li>
          <li>Contact Lens Solutions</li>
          <li>Eye Drops</li>
        </ul>
      </div>
      <div className={classes.filter}>
        <h4>Shop by Wear</h4>
        <ul className={classes.filter_list}>
          <li>Daily Lenses</li>
          <li>Monthly Lenses</li>
          <li>Two Weekly Lenses</li>
          <li>Extended Wear Lenses</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductsSidebar;
