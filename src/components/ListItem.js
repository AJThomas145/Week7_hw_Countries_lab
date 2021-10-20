import React from 'react';

const ListItem = ({country, onCountryClick}) => {

    const handleClick = function (){
        onCountryClick(country);
    }
    return <li onclick={handleClick}>{country.name}</li>
}

export default ListItem;