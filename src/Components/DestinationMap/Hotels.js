import React, { useState } from 'react';
import hotelData from '../../DestinationData/HotelData';
import { useParams } from 'react-router-dom';

const Hotels = (props) => {
    const {idName} = useParams();
   const [hotels, setHotels] = useState(hotelData);
    const{name, details, id } = props.destination;

    const hotelId = hotels.filter(htl => console.log(htl));
    // console.log(hotelId);
    
    return (
        <div>
            <h1 className='text-white'>{name}</h1>
        </div>
    );
};

export default Hotels;