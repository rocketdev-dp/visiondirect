import React from "react";
import classes from "./ProductsList.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Products = [
  {
    id: 1,
    name: "everclear ELITE",
    price: 16.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 2,
    name: "1 Day Acuvue Moist",
    price: 20.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/3/1/3168.jpg",
  },
  {
    id: 3,
    name: "Dailies AquaComfort Plus",
    price: 25.99,
    url: "https://static.visiondirect.info/media/catalog/product/cache/20/small_image/400x/17f82f742ffe127f42dca9de82fb58b1/2/0/20190812_1109s.jpg",
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
          <img src={product.url} alt={product.name} width="100%" height="auto" />
          <h4>{product.name}</h4>
          <div className={classes.price}>{`£${product.price.toFixed(2)}`}</div>
          <button onClick={addToCartHandler(product.id)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
