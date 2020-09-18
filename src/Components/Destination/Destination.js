import React from 'react';
import { useHistory, Link } from 'react-router-dom';


const Destination = (props) => {
    const { name, img } = props.destination;
    let history = useHistory();

    const handleBooking = () => {
        history.push(`/book`)
    }

    return (
        <Link to={'/destination/' + name} onClick={() => handleBooking()} className=' col-md-4'>
            <div className="place-img">
                <img className='img-fluid single-card' src={img} alt="" />
            </div>
            <div className="place-name">
                <h2 className='header-text text-white'>{name}</h2>
            </div>
        </Link>
    );
};

export default Destination;