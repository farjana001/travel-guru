import React, { useState, useContext } from 'react';
import DestinationData from '../../DestinationData/DestinationData';
import star from '../../Icon/star_1_.png';
import { useParams } from 'react-router-dom';
import Hotel from './Hotel';


const DestinationMap = () => {
    const { name } = useParams();
    const [hotelsDetails, setHotelDetails] = useState(DestinationData); 

    return (
        <div className='container'>
            <h2 className='text-white'>Stay in {name}</h2>
            <div className="row">
                <div className="col-md-6">
                    
                        {
                            hotelsDetails.map(htl => <Hotel hotelDetails={htl}></Hotel>)
                        }
                     </div>
                
                <div className="col-md-6"><h1 className='text-white header-text'>Google Map</h1></div>
            </div>
        </div>
    );
};

export default DestinationMap;