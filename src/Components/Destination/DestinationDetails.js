import React from 'react';


const DestinationDetails = (props) => {
    const {name} = props.details;
   console.log(name);
    return (
<div>
    <h1 className='text-white'>destination </h1>
</div>
    );
};

export default DestinationDetails;