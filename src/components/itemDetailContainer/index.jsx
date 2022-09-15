
import React, { useEffect, useState  } from "react";
import ItemDetail from "../itemDetail";
import { useParams } from "react-router-dom";
/* import Itemlist from "../itemList"; */

const palas = [
  
   { id: 2, image: "/images/paletaVarilon.png", title: "Pala Varilon", price: 'U$D 300', category: 'amateur' },
   { id: 3, image: " images/varilonAvant.png", title: "Pala Varilon", price: 'U$D 400', category: 'amateur' },
   { id: 4, image: " images/canonFrente.png", title: "Pala Varilon", price: 'U$D 450', category: 'inter' },
   { id: 5, image: " images/varilonLwfrente.png", title: "Pala Varilon", price: 'U$D 470',  category: 'inter' },
    { id: 6, image: " images/bourne-carbon-titanFrente.png", title: "Pala Varilon", price: 'U$D 500', category: 'pro' }, 
    { id: 7, image: " images/bourne-8.8.png", title: "Pala Varilon", price: 'U$D 530', category: 'pro' }  
];

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detalleId} = useParams({});

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(palas);
      }, 1000);
    });

    getData.then(res => setData (res.find(palas => palas.id === parseInt (detalleId)))); /* revisar, ver si esto esta bien si lleva s o no palas*/
  }, [detalleId]) /* revisar, ver si esto esta bien */
  

  return ( 
            <ItemDetail data={data} />
  );
}

export default ItemDetailContainer;
