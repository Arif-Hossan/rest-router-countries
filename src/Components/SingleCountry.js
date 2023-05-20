import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCountry = () => {
    const country = useLoaderData()[0];
    const {name,flags} = country;
    return (
        <div>
        <h1>{name.common}</h1>
        <p><small>{name.official}</small></p>
        <img src={flags.png} alt="" />
        </div>
    );
};

export default SingleCountry;