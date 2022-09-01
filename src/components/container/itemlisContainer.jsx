import ItemCount from "../navbar/itemCount";
import Itemlist from "../itemList";
import React, { useState, useEffect } from "react";

const palas = [
    { id: 1, image: "public/images/paletaVariloncostado.png", title: "Pala Varilon" },
    { id: 2, image: "public/images/munequera.jpg", title: "Pala Varilon" },


];



export const ItemlistContainer = ({ texto }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {

               
                    resolve(palas);
            }, 5000);

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
