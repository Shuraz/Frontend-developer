import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

function ProductDetail() {
  const { id } = useParams();
  const currentArt = data.find((art) => art.id === parseInt(id));
  return (
    <div>
      <h1> Product Details</h1>
      <Link to="/products">Back to Products</Link>
      <h2>{currentArt.title}</h2>
      <img src={currentArt.image} />
    </div>
  );
}

export default ProductDetail;
