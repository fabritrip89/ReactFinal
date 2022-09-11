import ItemCount from "../navbar/itemCount";
import Itemlist from "../itemList";
import React, { useState, useEffect } from "react";

const palas = [
   /*  { id: 1, image: "/bourne.png", title: "Pala Varilon", price: 'U$D 500' }, */
   /*  { id: 2, image: "/images/munequera.jpg", title: "Pala Varilon", price: 'U$D 500' }, */
    { id: 2, image: "/images/paletaVarilon.png", title: "Pala Varilon", price: 'U$D 500' },
    { id: 3, image: " images/varilonAvant.png", title: "Pala Varilon", price: 'U$D 500' },
    { id: 4, image: " images/canonFrente.png", title: "Pala Varilon", price: 'U$D 500' },
    { id: 5, image: " images/varilonLwfrente.png", title: "Pala Varilon", price: 'U$D 500' },
     { id: 6, image: " images/bourne-carbon-titanFrente.png", title: "Pala Varilon", price: 'U$D 500' }, 
     { id: 7, image: " images/bourne-8.8.png", title: "Pala Varilon", price: 'U$D 500' }


   
];



export const ItemlistContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {

               
                    resolve(palas);
            }, 3000);

        });
        getData.then(res => setData(res));

    }, [])

    const onAdd = (quantity) => {
        console.log(`agregaste ${quantity} unidades`);

    }

    return (
        <>

            <ItemCount initial={0} stock={50} onAdd={onAdd} />
            <Itemlist data={data} />
        </>
    );
};

export default ItemlistContainer;
