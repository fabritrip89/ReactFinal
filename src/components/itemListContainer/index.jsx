
import Itemlist from "../itemList";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const palas = [
   /*  { id: 1, image: "/bourne.png", title: "Pala Varilon", price: 'U$D 500' }, */
   /*  { id: 2, image: "/images/munequera.jpg", title: "Pala Varilon", price: 'U$D 500' }, */
    { id: 2, image: "/images/paletaVarilon.png", title: "Pala Varilon", price: 'U$D 300', category: 'amateur' },
    { id: 3, image: " images/varilonAvant.png", title: "Pala Varilon", price: 'U$D 400', category: 'amateur' },
    { id: 4, image: " images/canonFrente.png", title: "Pala Varilon", price: 'U$D 450', category: 'inter' },
    { id: 5, image: " images/varilonLwfrente.png", title: "Pala Varilon", price: 'U$D 470',  category: 'inter' },
     { id: 6, image: " images/bourne-carbon-titanFrente.png", title: "Pala Varilon", price: 'U$D 500', category: 'pro' }, 
     { id: 7, image: " images/bourne-8.8.png", title: "Pala Varilon", price: 'U$D 530', category: 'pro' }   
];



export const ItemlistContainer = ({ texto }) => {
    const [data, setData] = useState([]);



    const {categoriaId} = useParams();
    

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {

               
                    resolve(palas);
            }, 1000);

        });

        if (categoriaId) {
            getData.then(res => setData (res.filter(pro => pro.category === categoriaId))); /* se aplican filtros de busqueda ver si esto esta bien */
           
            
        }  else{

                getData.then(res => setData(res));
            
        }
       

    }, [categoriaId])

   

    return (
        <>

           
            <Itemlist data={data} />
        </>
    );
};

export default ItemlistContainer;
