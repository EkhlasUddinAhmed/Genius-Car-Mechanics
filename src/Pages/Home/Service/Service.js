import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const navigate=useNavigate();
    const {name, img, description, price,id} = service;

  const onClickHandling=()=>{
    navigate(`/booking/${id}`,{replace:true});

  }

    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            {/* <Link to={`/booking/${id}`}>
            <button className='btn btn-primary'>Book: {name}</button>
            </Link> */}
            <button onClick={onClickHandling} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;