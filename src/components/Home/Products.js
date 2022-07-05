import React, { Fragment } from "react";
import ProductsSidebar from "../UI/ProductsSidebar";
import ProductsList from "../UI/ProductsList";
import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes.row}>
      <ProductsSidebar />
      <ProductsList />
    </div>
  );
};

export default Products;
