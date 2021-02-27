import React from 'react';
import './country.css'
const Country = (props) => {
    const {name,population,flag,region} = props.country;
    const handelAddCountry = props.handelAddCountry;
    return (
        <div className='countryStyle'>
            <h4>Name:{name}</h4>
            <p>Population:{population}</p>
            <img className='image' src={flag} alt=""/>
            <p>region: {region}</p>
            <button onClick={()=>handelAddCountry(props.country)}>Add Country </button>
        </div>
    );
};

export default Country;