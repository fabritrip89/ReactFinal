import Item from "./main/item";
import React from "react";

const Itemlist =({data = []})=> {

    return (

       data.map (palas => <Item key={palas.id} info={palas}/>)

        
    );
}

export default Itemlist;