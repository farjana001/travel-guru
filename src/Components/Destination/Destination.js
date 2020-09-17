import React from 'react';
import { useHistory } from 'react-router-dom';


const Destination = (props) => {
    // console.log(props);
    const { name, img } = props.destination;
    let history = useHistory();

    const handleBooking = () => {
        history.push(`/book`)
    }

    return (
        <div onClick={() => handleBooking()} className='col-md-4'>
            <div className="place-img">
                <img className='img-fluid' src={img} alt="" />
            </div>
            <div className="place-name">
                <h2 className='text-white'>{name}</h2>
            </div>
        </div>
    );
};

export default Destination;