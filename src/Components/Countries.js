import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            {
                countries.map(country =><Country key={country.ccn3} country ={country}></Country>)
            }
        </div>
    );
};

export default Countries;