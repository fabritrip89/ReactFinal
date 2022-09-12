
import './items.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ info }) => {
    return (


        <Link to={`/detalle/${info.id}`} className='alturaImg'>
                <img className='imaGen' src={info.image} alt='' />
            <p> {info.title}</p>
            <p> {info.price}</p>

      
        </Link>


    );
}


export default Item;



