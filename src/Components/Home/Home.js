import React, { useState, useContext } from 'react';
import Destination from '../Destination/Destination';
import DestinationDetails from '../Destination/DestinationDetails';
import { UserContext } from '../../App';


const Home = () => {
    const [destination, setDestination] = useContext(UserContext);

    const [details, setDetails] = useState([]);

    const handleDestination = (dtls) => {
        const newDetails =  [...details, dtls];
        setDetails(newDetails);
    };
    return (
        <div className='container-fluid'>
            
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