import React, { useState } from "react";

export const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setCount] = useState(initial);

  const dicrement = () =>{

    setCount(count - 1);

  }

  const increment = () =>{

    setCount(count + 1);
  }

  return (
    <div className="counter">
      <button disabled={count <=0} onClick={dicrement}>-</button>
      <span>{count}</span>
      <button disabled={count >=stock} onClick={increment}>+</button>
      <div>
     
        <button disabled={stock <=0} onClick={() => onAdd(count)}> Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
