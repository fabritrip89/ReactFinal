
import ItemCount from "../navbar/itemCount";
import "./itemDetail.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ data }) => {
  const [iralCarrito, setiralCarrito] = useState(false);

  const onAdd = (quantity) => {
    setiralCarrito(true);
  };

  return (
    <div className="container">
      <div className="detail">
        <img className="detail--image" src={data.image} alt="" />
        <div className="content">
          <h1>{data.title}</h1>

          {iralCarrito ? (
            <Link to="/cart"> Finalizar compra</Link>
          ) : (
            <ItemCount initial={0} stock={50} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
