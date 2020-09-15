import React, { useState } from 'react';
import Menu from './Menu';
import DestinationData from '../../DestinationData/DestinationData';
import Destination from '../Destination/Destination';


const Home = () => {
    const [destination, setDestination] = useState(DestinationData);
    return (
        <div className='container-fluid header-body'>
            <Menu />
            <div className='country-body container'>
                <div className="row country align-items-center">
                    <div className="col-md-4 mr-3">
                        <h1 className='text-white'>destination</h1>
                    </div>
                    <div className="col-md-8 row mt-5">
                        {
                            destination.map(dst => <Destination key={destination.id} destination={dst}></Destination>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;