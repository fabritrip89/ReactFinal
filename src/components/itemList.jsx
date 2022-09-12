import Item from "./items";
import React from "react";

const Itemlist =({data = []})=> {

    return (

       data.map (palas => <Item key={palas.id} info={palas}/>)

        
    );
}

export default Itemlist;