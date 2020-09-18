import React, { useState } from 'react';
import DestinationData from '../../DestinationData/DestinationData';
import Hotel from './Hotel';


const DestinationMap = () => {
    
    const [hotelDetails, setHotelDetails] = useState(DestinationData);
  
    
    return (
        <div className='container'>
            <h2 className='text-white header-text'>Stay in Comfort</h2>
                <div className="row">
                    <div className="col-md-6">

                        {
                            hotelDetails.map(htl => <Hotel hotelDetails={htl}></Hotel>)
                        }
                    </div>

                    <div className="col-md-6  text-white">
                        <h1 className='text-white'>Google Map</h1>
                        <iframe
                            className="app__iframe"
                            frameBorder="0"
                            src={`https://www.google.com/maps/embed/v1/q?key=AIzaSyCHu9pBlXx_C67PkVRM7B_Z7mDnKaOTDyo=`}
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
        </div>
    );
};

export default DestinationMap;