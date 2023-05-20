import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
const {name} = country;
    return (
        <div>
            <li><Link to={`/country/${name.common}`}>{name.common}</Link></li>
        </div>
    );
};

export default Country;