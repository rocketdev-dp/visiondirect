import React from "react";

import classes from "./ProductsList.module.css";

import { useContext } from "react";

import CartContext from "../../store/cart-context";

const Products = [
  {
    id: 1,
    name: "Sample 1",
    price: 5.00,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 2,
    name: "Sample 2",
    price: 20.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 3,
    name: "Sample 3",
    price: 12.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },

  {
    id: 4,
    name: "Sample 4",
    price: 52.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },

  {
    id: 5,
    name: "Sample 5",
    price: 56.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 6,
    name: "Sample 6",
    price: 67.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 7,
    name: "Sample 7",
    price: 89.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 8,
    name: "Sample 8",
    price: 90.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 9,
    name: "Sample 9",
    price: 3.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 10,
    name: "Sample 10",
    price: 4.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 11,
    name: "Sample 11",
    price: 6.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 12,
    name: "Sample 12",
    price: 9.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
 
];

const ProductsList = () => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (id) => {
    return (event) => {
      event.preventDefault();
      let obj = Products.find((o) => o.id === id);
      cartCtx.addItem({
        id: obj.id,
        name: obj.name,
        amount: 1,
        price: obj.price,
      });
    };
  };

  return (
    <div className={classes.product_list}>
      {Products.map((product) => (
        <div className={classes.col_4} key={product.id}>
        <div className={classes.col_4_inner}>
          <img src={product.url} alt={product.name} width="100%" height="auto" />
          <h4 className={classes.pr_title}>{product.name}</h4>
          <div className={classes.price}>{`£${product.price.toFixed(2)}`}</div>
          <button onClick={addToCartHandler(product.id)}>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
