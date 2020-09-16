import React, { useState } from 'react';
import Menu from './Menu';
import DestinationData from '../../DestinationData/DestinationData';
import Destination from '../Destination/Destination';
import DestinationDetails from '../Destination/DestinationDetails';


const Home = () => {
    const [destination, setDestination] = useState(DestinationData);

    const [details, setDetails] = useState(DestinationData);

    const handleDestination = (destinationDetails) => {
        const newDestination = [...details, destinationDetails];
        
        setDetails(newDestination);
        console.log('object');
    }
    return (
        <div className='container-fluid header-body'>
            <Menu />
            <div className='country-body container'>
                <div className="row country align-items-center">
                    <div className="col-md-4 mr-3">
                        <DestinationDetails details={details}></DestinationDetails>
                        
                    </div>
                    <div className="col-md-8 row mt-5">
                        {
                            destination.map(dst => <Destination key={destination.id} destination={dst} handleDestination={handleDestination}></Destination>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;