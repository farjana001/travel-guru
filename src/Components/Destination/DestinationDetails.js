import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
// import DestinationData from '../../DestinationData/DestinationData';
import { Button } from 'react-bootstrap';


const DestinationDetails = (props) => {
    const { placeId } = useParams();
    const details = props.details;
    const {name, id} = details;
    let history = useHistory();
    // let location = useLocation();
    
    // let { from } = location.state || { from: { pathname: "/" } };

    const handleBooking = (id) => {
        history.push(`/book/${id}`)
        console.log('clicked');
    }

    return (
        <div>
            <style type="text/css">
                {`
        .btn-link {
          color: black;
        }
        .btn-primary {
            background-color: #f9a51a;
            border-radius: 5px;
            border: none;
            color: black
        }
        .btn-primary:hover{
            background-color: #af7009;
        }
        .btn-xxl {
            padding: 0.4rem 1.5rem;
        }
        `}
            </style>
            <h1 className='text-white'>destination</h1>
            <div>
                <div>
                    {
                        details.map(dtl => {
                            return (
                                <ul className='list-group mb-2 shadow'>
                                    <li className='list-group-item'>
                                        {dtl.name}
                                    </li>
                                    <Button onClick={() => handleBooking(id)} variant='primary' size='xxl'>Booking</Button>
                                </ul>
                                
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;