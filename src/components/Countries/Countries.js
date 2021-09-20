import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div>
            <h1 style={{ color: "skyblue" }}>This is a Countries in its own file</h1>
            <h2>Countries Available:{countries.length} </h2>
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        key={country.alpha3Code}
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;

/*
 name={country.name}
capital={country.capital}
population={country.population}
*/