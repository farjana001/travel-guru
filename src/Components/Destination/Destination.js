import React from 'react';


const Destination = (props) => {
    const { name, details, img } = props.destination;

    return (
        <div className='col-md-4'>
            <div className="flag-img">
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className="place-name">
                <h2 className='text-white'>{name}</h2>
            </div>
        </div>
    );
};

export default Destination;