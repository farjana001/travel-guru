import React, { useState, useContext } from 'react';
import coxImg from '../../Image/cox-1.png';
import { UserContext } from '../../App';
import Hotels from './Hotels';

const DestinationMap = () => {
    const {value1} = useContext(UserContext);
    const [destination, setDestination] = value1;

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <div className='d-flex'>
                        <div><img className='img-fluid' src={coxImg} alt=""/></div>
                        <div>
                        <h3 className='text-white'>Live in Comfort</h3>
                        <p className='text-white'>
                          {
                              destination.map(dst => <Hotels destination={dst}></Hotels>)
                          }
                        </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6"><h1 className='text-white header-text'>Google Map</h1></div>
            </div>
        </div>
    );
};

export default DestinationMap;