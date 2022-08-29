import ItemCount from "../navbar/itemCount";
import React from "react";

export const ItemlistContainer = ({ black, msj }) => {

  const onAdd = (quantity) => {

    console.log(`agregaste ${quantity} unidades`);
    
  };

  return (
    <>

      <ItemCount initial={0} stock={50} onAdd={onAdd} />
    </>
  );
};

export default ItemlistContainer;
