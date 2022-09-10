
import React, { useEffect, useState  } from "react";

import ItemDetail from "../itemDetail";

const palas = {
  id: 1,
  image: "/bourne.png",
  title: "Pala Varilon",
  price: "U$D 500",
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(palas);
      }, 2000);
    });

    getData.then(res => setData(res));
  }, [])

  return ( 
            <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;
