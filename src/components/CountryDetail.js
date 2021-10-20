import React from 'react';
import { SVGAttributes } from 'react';

const CountryDetail = ({selectedCountry}) => {
    return (
        <div>
            <h3>{selectedCountry.name}</h3>
            <p>Population: {selectedCountry.population}</p>
            <p>Capital: {selectedCountry.capital}</p>
            <img src = {selectedCountry.flag} width="10%" height="100%"/>
        </div>
    )
}

export default CountryDetail;