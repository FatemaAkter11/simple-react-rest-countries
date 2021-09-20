import React from 'react';
import './Country.css';


const Country = (props) => {
    const { name, flag, capital, population, region } = props.country;
    // console.log(props.country);
    return (
        <div className="country">
            <h3>Name: {name}</h3>
            <img src={flag} alt="" />
            <h4>Capital: {capital}</h4>
            <small>Region: {region}</small>
            <h5>Population:{population}</h5>
        </div>
    );
};

export default Country;