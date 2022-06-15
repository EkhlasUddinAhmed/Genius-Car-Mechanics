import React from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {id}=useParams();
    return (
        <div>
            <h1>This this Booking Component:{id}</h1>
        </div>
    );
};

export default Booking;